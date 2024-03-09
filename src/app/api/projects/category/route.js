import projectModel from '@/models/project/index'
import ConnectionDB from '@/utils/DB_connection/index'
export async function GET(request) {
    try {
        ConnectionDB()
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
        return Response.json({ success: true, data: result });
    } catch (error) {
        return Response.json({ success: false, msg: 'unable to get project' });
    }
}