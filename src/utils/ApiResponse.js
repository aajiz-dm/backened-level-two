class ApiResponse{

constructor(stausCode,data,message="success"){
    this.stausCode=stausCode;
    this.data=data;
    message=message;
    this.success=stausCode<400;
}

}