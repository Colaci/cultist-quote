// 不加use client 这默认是一个server component

export default async function(){
  const data = await fetch('http://localhost:3000/api/testAPI',{cache:"no-cache"})
  const time = (await data.json()).data
  return (<main>
    {time}
  </main>)
}