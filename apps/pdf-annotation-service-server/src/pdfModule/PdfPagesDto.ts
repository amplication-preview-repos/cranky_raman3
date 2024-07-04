import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";

@ObjectType("PdfPagesDtoObject")
class PdfPagesDto {
    @Field(() => [String])
    @ApiProperty({
        required: true,
        type: () => [String]
    })
    @Type(() => String)
    pages!: string;
}

export { PdfPagesDto as PdfPagesDto };