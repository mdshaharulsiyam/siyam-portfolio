import blogModel from '@/models/blog/index'
import ConnectionDB from '@/utils/DB_connection/index'
import { NextResponse } from 'next/server';
export async function GET(request) {
    try {
        await ConnectionDB()
        const id = request.nextUrl.searchParams.get('id');
        const result = await blogModel.findOne({_id :id})
        return NextResponse.json({ success: true, data: result });
    } catch (error) {
        console.log(error)
        return NextResponse.json({ success: false, msg: 'unable to get blog details' });
    }
    }