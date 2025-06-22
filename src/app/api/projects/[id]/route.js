import projectModel from '@/models/project/index';
import ConnectionDB from '@/utils/DB_connection/index';
import { NextResponse } from 'next/server';
export async function GET(request, context) {
  try {
    await ConnectionDB()
    const id = context.params.id
    const result = await projectModel.findOne({ _id: id })
    return NextResponse.json({ success: true, data: result });
  } catch (error) {
    // console.log(error)
    return NextResponse.json({ success: false, msg: 'unable to get project data' });
  }
}