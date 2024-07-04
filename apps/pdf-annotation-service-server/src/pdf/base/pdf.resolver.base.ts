/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Pdf } from "./Pdf";
import { PdfCountArgs } from "./PdfCountArgs";
import { PdfFindManyArgs } from "./PdfFindManyArgs";
import { PdfFindUniqueArgs } from "./PdfFindUniqueArgs";
import { CreatePdfArgs } from "./CreatePdfArgs";
import { UpdatePdfArgs } from "./UpdatePdfArgs";
import { DeletePdfArgs } from "./DeletePdfArgs";
import { ScreenshotFindManyArgs } from "../../screenshot/base/ScreenshotFindManyArgs";
import { Screenshot } from "../../screenshot/base/Screenshot";
import { PdfService } from "../pdf.service";
@graphql.Resolver(() => Pdf)
export class PdfResolverBase {
  constructor(protected readonly service: PdfService) {}

  async _pdfsMeta(
    @graphql.Args() args: PdfCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Pdf])
  async pdfs(@graphql.Args() args: PdfFindManyArgs): Promise<Pdf[]> {
    return this.service.pdfs(args);
  }

  @graphql.Query(() => Pdf, { nullable: true })
  async pdf(@graphql.Args() args: PdfFindUniqueArgs): Promise<Pdf | null> {
    const result = await this.service.pdf(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Pdf)
  async createPdf(@graphql.Args() args: CreatePdfArgs): Promise<Pdf> {
    return await this.service.createPdf({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Pdf)
  async updatePdf(@graphql.Args() args: UpdatePdfArgs): Promise<Pdf | null> {
    try {
      return await this.service.updatePdf({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Pdf)
  async deletePdf(@graphql.Args() args: DeletePdfArgs): Promise<Pdf | null> {
    try {
      return await this.service.deletePdf(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [Screenshot], { name: "screenshots" })
  async findScreenshots(
    @graphql.Parent() parent: Pdf,
    @graphql.Args() args: ScreenshotFindManyArgs
  ): Promise<Screenshot[]> {
    const results = await this.service.findScreenshots(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
