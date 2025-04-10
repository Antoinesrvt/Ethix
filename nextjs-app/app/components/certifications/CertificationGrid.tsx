import CertificationCard from './CertificationCard';

type Certification = {
  _id: string;
  name: string;
  slug: string;
  description?: string;
  category?: string;
  credibility?: number;
  logo?: any;
  website?: string;
  localizedContent?: {
    en?: {
      name?: string;
      description?: string;
    };
    fr?: {
      name?: string;
      description?: string;
    };
  };
};

type CertificationGridProps = {
  certifications: Certification[];
  title?: string;
  description?: string;
};

export default function CertificationGrid({
  certifications,
  title,
  description
}: CertificationGridProps) {
  if (!certifications || certifications.length === 0) {
    return (
      <div className="bg-light-gray/30 rounded-lg p-8 text-center">
        <p className="text-slate">No certifications found.</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {title && (
        <div className="mb-6">
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-3 text-charcoal">{title}</h2>
          {description && <p className="text-slate">{description}</p>}
        </div>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((certification) => (
          <CertificationCard 
            key={certification._id} 
            certification={certification} 
          />
        ))}
      </div>
    </div>
  );
} 