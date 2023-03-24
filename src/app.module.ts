import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EmployeeModule } from './employee.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/Employee'),
    EmployeeModule,
  ],
})
export class AppModule {}
