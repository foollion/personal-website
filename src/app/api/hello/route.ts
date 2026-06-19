export async function GET() {
  return Response.json({
    status: "ok",
    message: "新知老刘智能资产库 API",
    version: "0.1.0",
    endpoints: ["/api/hello"],
  });
}
