export class ApiResponse<type>{
    msg : string = '';
    data : type []=[];
    succes : boolean = false;
    isFailed : boolean = false;

}