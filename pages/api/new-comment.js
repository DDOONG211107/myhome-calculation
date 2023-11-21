// 여기 쓰여진 코드는 절대로 클라이언트에게 보여지지 않음 (깃허브 조심)
// /api/new-comment
// POST/api/new-comment

import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    // 비밀번호를 입력하고, 'mongodb.net'뒤에 db 이름을 설정
    const client = await MongoClient.connect(
      process.env.NEXT_PUBLIC_MONGODB_CONNECTION
    );
    const db = client.db();

    const commentsCollection = db.collection("comments");
    const result = await commentsCollection.insertOne(data);
    console.log(result);

    client.close();

    // 201: 성공적으로 데이터를 삽입했다는 코드
    res.status(201).json({ message: "Meetup inserted!" });
  }
}

export default handler;
