import projectModel from '@/models/project/index'
import ConnectionDB from '@/utils/DB_connection/index'
import { NextResponse } from 'next/server';
export async function GET(request) {
    try {
      await ConnectionDB()
      const result = await projectModel.find({ featured: { $ne: "none" } });
      return NextResponse.json({ success: true, data: result });
    } catch (error) {
     // console.log(error)
      return NextResponse.json({ success: false, msg: 'unable to get featured projects' });
    }
  }