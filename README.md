# Ion-Message

ionc 在线消息
- 网易七鱼

### pp message

- [PPMESSAGE 使用手册](http://ppmessage.cn/doc/)
- [PPMESSAGE 高级集成方法](https://www.jianshu.com/p/1ae17ba01a66)

###### INSTALL

```ts
@NgModule({
  //...
  imports: [
    //...
    PpMessageModule.forRoot("<app_id>")
  ]
})
export class AppModule {}
```

###### API
```ts
PPMessage.show()
PPMessage.onShow():Promise<void>
PPMessage.update(conf: {
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
```
