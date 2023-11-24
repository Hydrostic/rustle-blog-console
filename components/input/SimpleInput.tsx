export default function SimpleInput(){
    return (
        <div>
            <label htmlFor="input-label" className="block text-sm font-medium mb-2 dark:text-white">Email</label>
            <input type="email" id="input-label" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="you@site.com" />
        </div>
    )
}