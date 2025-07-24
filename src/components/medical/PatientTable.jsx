import { Link } from 'react-router-dom';
import { User, Calendar, FileText, ArrowRight } from 'lucide-react';

export default function PatientTable({ patients }) {
  if (!patients || patients.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow p-8 text-center">
        <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mx-auto" />
        <h3 className="text-xl font-semibold mt-4 text-gray-600">Aucun patient trouvé</h3>
        <p className="text-gray-500 mt-2">Commencez par ajouter un nouveau patient</p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto bg-white rounded-lg shadow">
      <table className="min-w-full">
        <thead className="bg-blue-600 text-white">
          <tr>
            <th className="py-3 px-4 text-left">Patient</th>
            <th className="py-3 px-4 text-left hidden md:table-cell">Dernière consultation</th>
            <th className="py-3 px-4 text-left hidden sm:table-cell">Diagnostic</th>
            <th className="py-3 px-4 text-left">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {patients.map((patient) => (
            <tr key={patient.id} className={`hover:bg-blue-50 ${patient.emergency ? 'bg-red-50' : ''}`}>
              <td className="py-3 px-4">
                <div className="flex items-center">
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-10 h-10 mr-3" />
                  <div>
                    <span>{patient.name}</span>
                    {patient.emergency && (
                      <span className="ml-2 bg-red-100 text-red-800 text-xs px-2 py-1 rounded md:hidden">
                        Urg
                      </span>
                    )}
                    <div className="md:hidden text-sm text-gray-500">
                      {patient.lastVisit}
                    </div>
                  </div>
                </div>
              </td>
              <td className="py-3 px-4 hidden md:table-cell">
                <div className="flex items-center">
                  <Calendar className="mr-2 text-blue-600" size={18} />
                  <span>{patient.lastVisit}</span>
                </div>
              </td>
              <td className="py-3 px-4 hidden sm:table-cell">
                <div className="flex items-center">
                  <FileText className="mr-2 text-blue-600" size={18} />
                  <span className="truncate max-w-xs">{patient.diagnosis}</span>
                </div>
              </td>
              <td className="py-3 px-4">
                <Link 
                  to={`/medical/patient/${patient.id}`}
                  className="flex items-center text-blue-600 hover:text-blue-800"
                >
                  <span className="hidden md:inline">Voir détails</span>
                  <ArrowRight className="ml-1" size={18} />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}