import { ApiProperty } from "@nestjs/swagger";
export class CreateBrandDto {
    @ApiProperty({ type: String })
    name: string;
    @ApiProperty({type:String})
    img:string;
    @ApiProperty({type:String})
    href:string;
}
