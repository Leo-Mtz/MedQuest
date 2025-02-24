
export async function POST (request: Request) {
    const data = await request.json();
    console.log(data);
    return new Response(JSON.stringify(data), {
        status: 200,
        headers: {
            'Content-Type': 'application/json',
        },
    });
}