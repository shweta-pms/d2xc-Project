import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({
    timestamps:true
})
 export class Users{
    @Prop({required:true,type:String})
    name: string

    @Prop({required:true,type:String, unique: true})
    email: string

    @Prop({required:true,type:String})
    password: string
 }
 export const usersSchema = SchemaFactory.createForClass(Users)