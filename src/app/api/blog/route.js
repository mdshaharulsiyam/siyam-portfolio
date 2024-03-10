import blogModel from '@/models/blog/index'
import ConnectionDB from '@/utils/DB_connection/index'
import { NextResponse } from 'next/server';
export async function POST(request) {
    try {
        await ConnectionDB()
        const data = await request.json()
        const result = await blogModel.create(data);
        return NextResponse.json({ success: true, data: result });
    } catch (error) {
        return NextResponse.json({ success: false, msg: 'unable to add blog' });
    }
}

export async function GET(request) {
    try {
        await ConnectionDB()
        const result = await blogModel.find();
        return NextResponse.json({ success: true, data: result });
    } catch (error) {
        return NextResponse.json({ success: false, msg: 'unable to get blog' });
    }
}
export async function DELETE(request) {
try {
    await ConnectionDB()
    const id = request.nextUrl.searchParams.get('id');
    const result = await blogModel.deleteOne({_id :id})
    return NextResponse.json({ success: true, data: result });
} catch (error) {
   // console.log(error)
    return NextResponse.json({ success: false, msg: 'unable to delete' });
}
}