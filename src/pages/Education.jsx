import AudioLibrary from '../components/education/AudioLibrary';

export default function Education() {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="mb-8 text-center">
        <h1 className="text-2xl font-bold text-blue-600 mb-2">Éducation Sanitaire Vocale</h1>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Écoutez des conseils santé dans votre langue maternelle : Mooré, Dioula, Fulfuldé ou Français
        </p>
      </div>
      <AudioLibrary />
    </div>
  );
}