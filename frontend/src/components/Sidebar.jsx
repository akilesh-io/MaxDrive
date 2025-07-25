import React from 'react'
import { Plus, Star, Trash2, Clock, FolderSearch } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const SideBar = ({ onFilterChange, setShowFolderDialog})=>{
  const navigate = useNavigate();

  const actions = [
    {label: "New Folder", icon: <Plus size={18}/>, onClick: () => setShowFolderDialog(true)},
    {label: "Starred", icon: <Star size={18}/>, onClick: () =>  onFilterChange("Starred")},
    {label: "Trash", icon: <Trash2 size={18}/>, onClick: () => onFilterChange("Trashed")},
    {label: "Recent", icon: <Clock size={18}/>, onClick: () => onFilterChange('Recent Files')},
    {label: "All Files", icon: <FolderSearch size={18}/>, onClick:() => onFilterChange('all')}
];
 return (
    <div className="p-4 text-gray-800 w-56">
      <h2 className="text-lg font-semibold mb-6">Quick Actions</h2>
      <nav className="flex flex-col gap-1">
        {actions.map((action) => (
          <button
            key={action.label}
            onClick={action.onClick}
            className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-zinc-700/50 hover:translate-x-1 transition-all duration-200 group"
          >
            <span className="text-gray-800 group-hover:text-white transition-colors">{action.icon}</span>
            <span className="text-sm font-medium group-hover:text-white">{action.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
};

export default SideBar;
