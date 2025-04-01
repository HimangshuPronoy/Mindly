
import React, { useState, useEffect } from 'react';
import ResourceCard, { ResourceProps } from './ResourceCard';

// Realistic resources data
const resourcesData: ResourceProps[] = [
  {
    id: '1',
    title: 'Understanding Anxiety',
    description: 'Learn about the causes, symptoms, and treatments for anxiety disorders.',
    type: 'article',
    tags: ['anxiety', 'mental health', 'education'],
    url: 'https://www.nimh.nih.gov/health/topics/anxiety-disorders',
  },
  {
    id: '2',
    title: '5-Minute Breathing Exercise',
    description: 'A quick breathing technique to help manage stress and anxiety.',
    type: 'exercise',
    tags: ['stress', 'anxiety', 'quick'],
    url: 'https://www.youtube.com/watch?v=acUZdGd_3Gk',
  },
  {
    id: '3',
    title: 'Guided Meditation for Sleep',
    description: 'A calming meditation to help you relax and fall asleep.',
    type: 'meditation',
    tags: ['sleep', 'relaxation', 'evening'],
    url: 'https://www.youtube.com/watch?v=aEqlQvczMJQ',
  },
  {
    id: '4',
    title: 'How to Practice Self-Compassion',
    description: 'Video guide on developing self-compassion for better mental health.',
    type: 'video',
    tags: ['self-care', 'compassion', 'growth'],
    url: 'https://www.youtube.com/watch?v=rzwC_e_3yFU',
  },
  {
    id: '5',
    title: 'The Science of Depression',
    description: 'Understanding the biological and psychological aspects of depression.',
    type: 'article',
    tags: ['depression', 'science', 'education'],
    url: 'https://www.healthline.com/health/depression',
  },
  {
    id: '6',
    title: 'Journaling Prompts for Mental Health',
    description: 'Thoughtful prompts to explore your feelings and improve wellbeing.',
    type: 'exercise',
    tags: ['journaling', 'reflection', 'self-awareness'],
    url: 'https://www.therapistaid.com/therapy-worksheets/gratitude/none',
  },
  {
    id: '7',
    title: 'Coping with Grief and Loss',
    description: 'Resources and techniques for navigating grief in healthy ways.',
    type: 'article',
    tags: ['grief', 'loss', 'coping'],
    url: 'https://www.helpguide.org/articles/grief/coping-with-grief-and-loss.htm',
  },
  {
    id: '8',
    title: 'Body Scan Meditation',
    description: 'A guided practice to reduce physical tension and increase body awareness.',
    type: 'meditation',
    tags: ['body awareness', 'relaxation', 'stress'],
    url: 'https://www.youtube.com/watch?v=QS2yDmWk0vs',
  },
  {
    id: '9',
    title: 'Understanding Trauma Responses',
    description: 'Educational video on how trauma affects the mind and body.',
    type: 'video',
    tags: ['trauma', 'healing', 'psychology'],
    url: 'https://www.youtube.com/watch?v=PTNxrqGddRc',
  },
];

interface ResourceListProps {
  searchQuery?: string;
  filter?: string;
}

const ResourceList: React.FC<ResourceListProps> = ({ searchQuery = '', filter = 'all' }) => {
  const [filteredResources, setFilteredResources] = useState<ResourceProps[]>(resourcesData);
  
  useEffect(() => {
    let result = [...resourcesData];
    
    // Apply type filter
    if (filter !== 'all') {
      result = result.filter(resource => resource.type === filter);
    }
    
    // Apply search query
    if (searchQuery.trim() !== '') {
      const query = searchQuery.toLowerCase();
      result = result.filter(resource => 
        resource.title.toLowerCase().includes(query) || 
        resource.description.toLowerCase().includes(query) ||
        resource.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }
    
    setFilteredResources(result);
  }, [searchQuery, filter]);
  
  if (filteredResources.length === 0) {
    return (
      <div className="text-center py-10">
        <p className="text-muted-foreground">No resources found matching your criteria.</p>
        <p className="text-sm mt-2">Try adjusting your search or filter.</p>
      </div>
    );
  }
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredResources.map((resource) => (
        <ResourceCard key={resource.id} resource={resource} />
      ))}
    </div>
  );
};

export default ResourceList;
