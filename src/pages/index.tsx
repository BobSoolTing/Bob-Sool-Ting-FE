import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto p-6 space-y-6">
      {/* Search Section */}
      <div className="text-xl font-semibold text-gray-700">검색창</div>

      {/* Links Section */}
      <div className="space-x-4">
        <Link href={"/bst/meal/meal"} className="text-blue-500 hover:underline">
          밥약
        </Link>
        <Link href={"/bst/meal/drink"} className="text-blue-500 hover:underline">
          술약
        </Link>
        <Link href={"/bst/meal/groupMeet"} className="text-blue-500 hover:underline">
          과팅
        </Link>
      </div>

      {/* Post Items Section */}
      <div className="space-y-2">
        <div className="p-4 border rounded-lg shadow-md bg-white">포스트 아이템 1</div>
        <div className="p-4 border rounded-lg shadow-md bg-white">포스트 아이템 2</div>
        <div className="p-4 border rounded-lg shadow-md bg-white">포스트 아이템 3</div>
      </div>
    </div>
  );
}
