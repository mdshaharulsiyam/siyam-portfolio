//wonerModel
import wonerModel from '@/models/woner/index'
import ConnectionDB from '@/utils/DB_connection/index'
import { NextResponse } from 'next/server';
export async function POST(request) {
    try {
        await ConnectionDB()
        const data = await request.json()
        const result = await wonerModel.create(data);
        return NextResponse.json({ success: true, data: result });
    } catch (error) {
        console.log(error)
        return NextResponse.json({ success: false, msg: 'unable to profile' });
    }
}

export async function GET(request) {
    try {
        await ConnectionDB()
        const result = await wonerModel.find().sort({ timestampField: -1 }).limit(1);
        return NextResponse.json({ success: true, data: result });
    } catch (error) {
        return NextResponse.json({ success: false, msg: 'unable to get profile' });
    }
}
