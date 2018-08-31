export declare class PPMessage {
    static PP: any;
    static readonly initialized: boolean;
    static ready(): Promise<PPMessage>;
    static update(conf: {
        app_uuid?: string;
        ent_user_id?: string;
        ent_user_name?: string;
        ent_user_icon?: string;
        ent_user_mobile?: string;
        view?: {
            launcher_is_show?: boolean;
            launcher_bottom_margin?: string;
            launcher_right_margin?: string;
            launch_style?: {
                mode?: string;
                position?: string;
                bottom?: number;
            };
        };
    }): void;
    static onShow(): Promise<void>;
    static show(): void;
}
