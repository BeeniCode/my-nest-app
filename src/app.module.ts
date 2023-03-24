import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EmployeeModule } from './employee.module';
const MONGOURI: string =
  'mongodb+srv://mubeen:xwMHMxCMVqhEqkRe@cluster0.zaasaak.mongodb.net/Employee';
// const MONGOURI:string = "mongodb://localhost:27017/Employee"
@Module({
  imports: [MongooseModule.forRoot(MONGOURI), EmployeeModule],
})
export class AppModule {}
