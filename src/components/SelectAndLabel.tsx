import { optionSelect, propsElementAndLabel } from "./interfaces/IElementAndLabel"

export const SelectAndLabel = ({label, name, marginBottom, options} : propsElementAndLabel) => {
    if (!options) options = [];

    return (
    <div className={`mb-${marginBottom}`}>
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{label}</label>
        <select id="countries" name={name} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            {
                options.map( (option: optionSelect) => (
                    <option value={option.key}>{option.value}</option>
                ) )
            }
        </select>
    </div>
  )
}
