import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";

@ObjectType("ScreenshotListDtoObject")
class ScreenshotListDto {
    @Field(() => [String])
    @ApiProperty({
        required: true,
        type: () => [String]
    })
    @Type(() => String)
    screenshots!: string;
}

export { ScreenshotListDto as ScreenshotListDto };