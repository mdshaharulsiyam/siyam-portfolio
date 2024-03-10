import projectModel from '@/models/project/index'
import ConnectionDB from '@/utils/DB_connection/index'
import { NextResponse } from 'next/server';
export async function GET(request) {
  try {
    await ConnectionDB()
    const result = await projectModel.aggregate([
      {
        $group: {
          _id: "$technology",
          count: { $sum: 1 }
        }
      },
      {
        $project: {
          _id: 0,
          technology: "$_id",
          count: 1
        }
      }
    ]);
    return NextResponse.json({ success: true, data: result });
  } catch (error) {
   // console.log(error)
    return NextResponse.json({ success: false, msg: 'unable to get category' });
  }
}