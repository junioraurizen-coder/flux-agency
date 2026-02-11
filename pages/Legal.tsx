import React from 'react';

const Legal: React.FC = () => {
  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto min-h-screen text-gray-400">
      <h1 className="text-3xl font-bold text-white mb-10">Mentions Légales & CGV</h1>
      
      <div className="space-y-12">
        <section>
          <h2 className="text-xl font-semibold text-white mb-4">1. Informations légales</h2>
          <p className="mb-2">Le site Flux Agency est édité par :</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Nom de l'entreprise : Flux Agency SAS</li>
            <li>Siège social : 12 Avenue des Champs-Élysées, 75008 Paris, France</li>
            <li>SIRET : 000 000 000 00000</li>
            <li>Email : hello@fluxagency.fr</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-4">2. Hébergement</h2>
          <p>Le site est hébergé par Vercel Inc., 340 S Lemon Ave #4133 Walnut, CA 91789, USA.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-4">3. Conditions Générales de Vente (CGV)</h2>
          <div className="space-y-4 text-sm">
            <p><strong className="text-gray-300">Objet :</strong> Les présentes conditions régissent les ventes de services digitaux par Flux Agency.</p>
            <p><strong className="text-gray-300">Prix :</strong> Les prix de nos services sont indiqués en euros toutes taxes comprises (TTC).</p>
            <p><strong className="text-gray-300">Paiement :</strong> Le fait de valider votre commande implique pour vous l'obligation de payer le prix indiqué.</p>
            <p><strong className="text-gray-300">Rétractation :</strong> Conformément à l’article L221-28 du Code de la consommation, le droit de rétractation ne peut être exercé pour les contrats de fourniture d'un contenu numérique non fourni sur un support matériel dont l'exécution a commencé après accord préalable exprès du consommateur et renoncement exprès à son droit de rétractation.</p>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-4">4. Données Personnelles (RGPD)</h2>
          <p className="text-sm">
            Les informations recueillies sur le formulaire de commande sont enregistrées dans un fichier informatisé par Flux Agency pour la gestion de la clientèle. Elles sont conservées pendant 3 ans et sont destinées au service marketing et commercial établi dans l'Union Européenne. Conformément à la loi « informatique et libertés », vous pouvez exercer votre droit d'accès aux données vous concernant et les faire rectifier en contactant : hello@fluxagency.fr
          </p>
        </section>
      </div>
    </div>
  );
};

export default Legal;