import {text} from "@angular/core/src/render3/instructions";

export class PPMessage
{

  public static PP: any = null;

  public static get initialized()
  {
    return typeof window["PP"] != "undefined";
  }

  public static ready(): Promise<PPMessage>
  {
    return new Promise<any>(resolve => {
      let loop = (ms: number) => {
        if (PPMessage.initialized) {
          this.PP = window['PP'];
          resolve(PPMessage)
        } else {
          setTimeout(() => loop(ms), ms)
        }
      };
      loop(100);
    })
  }

  public static update(conf: {
    app_uuid?: string,
    ent_user_id?: string,
    ent_user_name?: string,
    ent_user_icon?: string,
    ent_user_mobile?: string,
    view?: {
      launcher_is_show?: boolean,
      launcher_bottom_margin?: string,    //'20px'
      launcher_right_margin?: string,     //'30px'
      launch_style?: {
        mode?: string,                    //'normal',
        position?: string,                //'right',
        bottom?: number                   //95
      }
    }
  })
  {
    this.ready().then(() => {
      Object.keys(conf).forEach(key => window['ppSettings'][key] = conf[key])
      this.PP.update()
    })
  }

  public static onShow(): Promise<void>
  {
    return this.ready()
        .then(() => new Promise<void>(ex => this.PP.onShow(() => ex())))
  }

  public static show()
  {
    this.ready().then(() => {
      if (!this.PP.isOpen()) {
        this.PP.show();
        this.resizePP();
      }
    })
  }

  /**
   * 解决输入法遮挡输入框
   */
  public static resizePP()
  {
    setTimeout(() => {
      let pp = document.getElementById("pp-conversation");
      let textarea = document.getElementById("pp-composer-container-textarea");
      let content = document.getElementById("pp-conversation-content");
      if (!!pp) return;
      textarea.addEventListener("focus", () => {
        // pp.scrollIntoView(false)
        setTimeout(() => {
          content.dataset.height = content.style.height;
          content.style.height = parseInt(content.style.height.replace("px", "")) - 100 + "px";
        }, 100)
      });
      textarea.addEventListener("blur", () => {
        // setTimeout(() => { pp.style.height = window.innerHeight + "px"; }, 100);
        content.style.height = content.dataset.height
      })
    }, 3000);
  }
}
