import Image from "next/image"

function SidebarRow({src, Icon, title}) {
  return (
    <div className="flex items-center space-x-2 space-y-3 p-4 rounded-xl cursor-pointer active:text-blue-700 hover:bg-gray-200">
      {src &&(
        <Image className="rounded-full mx-2" src={src} width={30} height={30} layout="fixed" />
      )}
      {Icon &&(
        <Icon className="h-8 w-8 text-blue-500" />
      )}
      <p className="hidden sm:inline-flex font-medium">{title}</p>
    </div>
  )
}

export default SidebarRow
