/**
 * v0 by Vercel.
 * @see https://v0.dev/t/J2izezL3YnP
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="max-w-[768px] mx-auto bg-white">
      <div className="bg-[#4e5ae8] text-white p-4">
        <div className="flex justify-between items-center">
          <ChevronLeftIcon className="text-white" />
          <p className="text-lg">7:18</p>
          <CircleEllipsisIcon className="text-white" />
        </div>
        <div className="pt-10 pb-6 text-center">
          <div className="inline-flex items-center justify-center rounded-full bg-white p-2 w-16 h-16 mx-auto mb-4">
            <CheckIcon className="text-[#4e5ae8]" />
          </div>
          <h1 className="text-3xl font-bold mb-2">Transfer Successful</h1>
          <p className="text-lg">to Vikas Nagar</p>
        </div>
      </div>
      <div className="bg-white p-4 rounded-t-3xl shadow">
        <div className="border-b pb-4">
          <div className="flex justify-between">
            <p className="text-lg font-medium">Amount</p>
            <p className="text-lg font-medium">₹10,000</p>
          </div>
          <div className="flex justify-between">
            <p className="text-lg">Beneficiary Upi Id</p>
            <p className="text-lg">7440359948-2@ybl</p>
          </div>
          <div className="flex justify-between">
            <p className="text-lg">Transaction ID</p>
            <p className="text-lg">6165f380671f2</p>
          </div>
          <div className="flex justify-between">
            <p className="text-lg">Transaction Time</p>
            <p className="text-lg">18/04/2024, 07:18 pm</p>
          </div>
          <div className="flex items-center justify-between py-3">
            <Button className="text-indigo-500" variant="ghost">
              View less details
            </Button>
            <ChevronUpIcon className="text-indigo-500" />
          </div>
        </div>
        <div className="p-4 mt-4 rounded-lg shadow">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <TagIcon className="text-[#ffbf47]" />
              <p className="ml-2 font-bold text-[#ffbf47]">ZIP</p>
            </div>
            <XIcon className="text-muted-foreground" />
          </div>
          <p className="text-center font-semibold my-4">An easy way to Shop now, Pay later</p>
          <div className="flex justify-around pb-4">
            <div className="text-center">
              <CurrencyIcon className="text-[#ffbf47]" />
              <p>Upto ₹60,000</p>
            </div>
            <div className="text-center">
              <PercentIcon className="text-[#ffbf47]" />
              <p>0% Interest</p>
            </div>
            <div className="text-center">
              <WalletIcon className="text-[#ffbf47]" />
              <p>200 SuperCash</p>
            </div>
          </div>
          <Button className="w-full">Activate Now</Button>
        </div>
      </div>
      <div className="text-center p-4">
        <img
          alt="Mobikwik logo"
          height="24"
          src="/placeholder.svg"
          style={{
            aspectRatio: "122/24",
            objectFit: "cover",
          }}
          width="122"
        />
      </div>
    </div>
  )
}

function CheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}


function ChevronLeftIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  )
}


function ChevronUpIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m18 15-6-6-6 6" />
    </svg>
  )
}


function CircleEllipsisIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M17 12h.01" />
      <path d="M12 12h.01" />
      <path d="M7 12h.01" />
    </svg>
  )
}


function CurrencyIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="8" />
      <line x1="3" x2="6" y1="3" y2="6" />
      <line x1="21" x2="18" y1="3" y2="6" />
      <line x1="3" x2="6" y1="21" y2="18" />
      <line x1="21" x2="18" y1="21" y2="18" />
    </svg>
  )
}


function PercentIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="19" x2="5" y1="5" y2="19" />
      <circle cx="6.5" cy="6.5" r="2.5" />
      <circle cx="17.5" cy="17.5" r="2.5" />
    </svg>
  )
}


function TagIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z" />
      <path d="M7 7h.01" />
    </svg>
  )
}


function WalletIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
      <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
      <path d="M18 12a2 2 0 0 0 0 4h4v-4Z" />
    </svg>
  )
}


function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}