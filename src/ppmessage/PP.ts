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
    })
  }

  public static onShow(): Promise<void>
  {
    return this.ready()
        .then(() => new Promise<void>(ex => this.PP.onShow(() => ex())))
  }

  public static show()
  {
    this.update({
      ent_user_id: "234234",
      ent_user_name: "Zeno",
      ent_user_icon: "",
      ent_user_mobile: "18888888888"
    });

    this.ready().then(() => {
      if (!this.PP.isOpen()) {
        // let inter = setInterval(() => {
        this.PP.show();
        //   if (this.PP.isOpen()) clearInterval(inter)
        // }, 1000)
      }
    })
  }
}
