export class Configuration {

    //properties
    public static server: string = 'localhost:61598';
    //public static server: string = 'fsf-1.azurewebsites.net';
    //public static server: string = 'fsf-2.azurewebsites.net';
    //public static server: string = 'analytica2.azurewebsites.net';
    //public static server: string = '186.3.19.133/FondoInversion';
    
    //public static serverWithApiUrl:string = '/';
    public static serverWithApiUrl:string ='http://' + Configuration.server + '/';

    //constructor
    constructor() {
    }

    public static getToken():string
    {
        return sessionStorage.getItem('id_token');
    } 
}