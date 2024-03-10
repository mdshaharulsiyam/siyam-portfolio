import projectModel from '@/models/project/index'
import ConnectionDB from '@/utils/DB_connection/index'
import { NextResponse } from 'next/server';
export async function POST(request) {
    try {
        await ConnectionDB()
        const data = await request.json()
        const result = await projectModel.create(data);
        return NextResponse.json({ success: true, data: result });
    } catch (error) {
        return NextResponse.json({ success: false, msg: 'unable to add project' });
    }
}

export async function GET(request) {
    try {
        await ConnectionDB()
        const technology = request.nextUrl.searchParams.get('category');
        // console.log(technology)
        let filter = {}
        if (technology !== 'all') {
            filter.technology = technology
        }
        const result = await projectModel.find(filter);
        return NextResponse.json({ success: true, data: result });
    } catch (error) {
        return NextResponse.json({ success: false, msg: 'unable to get project' });
    }
}
export async function DELETE(request) {
try {
    await ConnectionDB()
    const id = request.nextUrl.searchParams.get('id');
    const result = await projectModel.deleteOne({_id :id})
    return NextResponse.json({ success: true, data: result });
} catch (error) {
    console.log(error)
    return NextResponse.json({ success: false, msg: 'unable to delete' });
}
}