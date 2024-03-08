"use client";
import useSwr from "swr";
const fetcher = (url:string)=>fetch(url).then((res)=>res.json())
export default function Home() {
  const {data,error,isLoading} = useSwr<any>("/api/getTypperStr",fetcher)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {data?.data}
    </main>
  );
}
