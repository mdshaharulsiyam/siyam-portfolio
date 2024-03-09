import projectModel from '@/models/project/index'
import ConnectionDB from '@/utils/DB_connection/index'
export async function POST(request) {
   try {
    ConnectionDB()
    const data = await request.json()
    const result = await projectModel.create(data);
    return Response.json({ success: true, data: result });
   } catch (error) {
    return Response.json({ success: false, msg: 'unable to add project' });
   }
}

export async function GET(request) {
    try {
        ConnectionDB()
        const result = await projectModel.find();
        return Response.json({ success: true, data: result });
    } catch (error) {
        return Response.json({ success: false, msg: 'unable to get project' });
    }
}