import { Expose } from "class-transformer";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class AssessmentsetDto {
  @Expose()
  assessmentsetId: string;

  @ApiProperty({
    description: "Assessment set title ",
  })
  @Expose()
  title: string;

  @ApiPropertyOptional({
    description: "Assessment set Type",
  })
  @Expose()
  type: string;

  @ApiProperty({
    description: "Assessmentset type, Ex - marks, boolean, grade",
  })
  @Expose()
  typeDetails: string;

  @ApiProperty({
    description: "Assessmentset type details",
  })
  @Expose()
  gradeType: string;

  @ApiProperty({
    description: "Extra data against assessment sent",
  })
  @Expose()
  options: string;

  @Expose()
  createdAt: string;

  @Expose()
  updatedAt: string;

  constructor(obj: any) {
    this.assessmentsetId = obj?.assessmentsetId ? `${obj.assessmentsetId}` : "";
    this.title = obj?.title ? `${obj.title}` : "";
    this.type = obj?.type ? obj.type : "";
    this.typeDetails = obj?.typeDetails ? obj.typeDetails : "";
    this.gradeType = obj?.gradeType ? `${obj.gradeType}` : "";
    this.options = obj?.options ? `${obj.options}` : "";
    this.createdAt = obj?.created_at ? `${obj.created_at}` : "";
    this.updatedAt = obj?.updated_at ? `${obj.updated_at}` : "";
  }
}
