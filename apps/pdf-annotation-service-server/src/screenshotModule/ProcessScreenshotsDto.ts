import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";

@ArgsType()
class ProcessScreenshotsDto {
    @Field(() => [String])
    @ApiProperty({
        required: true,
        type: () => [String]
    })
    @Type(() => String)
    screenshotUrls!: string;
}

export { ProcessScreenshotsDto as ProcessScreenshotsDto };