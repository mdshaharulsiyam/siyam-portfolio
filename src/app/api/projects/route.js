import projectModel from '@/models/project/index'
import ConnectionDB from '@/utils/DB_connection/index'
import { NextRequest, NextResponse } from 'next/server';
export async function POST() {
   try {
    await ConnectionDB()
    const data = await NextRequest.json()
    const result = await projectModel.create(data);
    return NextResponse.json({ success: true, data: result });
   } catch (error) {
    return NextResponse.json({ success: false, msg: 'unable to add project' });
   }
}

export async function GET() {
    try {
       await ConnectionDB()
        const result = await projectModel.find();
        return NextResponse.json({ success: true, data: result });
    } catch (error) {
        return NextResponse.json({ success: false, msg: 'unable to get project' });
    }
}