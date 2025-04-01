
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

export interface ResourceProps {
  id: string;
  title: string;
  description: string;
  type: 'article' | 'video' | 'meditation' | 'exercise';
  tags: string[];
  url: string;
}

const ResourceCard = ({ resource }: { resource: ResourceProps }) => {
  const typeColors = {
    article: 'bg-mindmate-blue text-foreground',
    video: 'bg-mindmate-orange text-foreground',
    meditation: 'bg-mindmate-green text-foreground',
    exercise: 'bg-mindmate-yellow text-foreground',
  };
  
  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <div className="flex justify-between items-start mb-2">
          <Badge className={cn(typeColors[resource.type])}>
            {resource.type.charAt(0).toUpperCase() + resource.type.slice(1)}
          </Badge>
        </div>
        <CardTitle className="text-lg">{resource.title}</CardTitle>
        <CardDescription>{resource.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="flex flex-wrap gap-2">
          {resource.tags.map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full">
          <a href={resource.url} target="_blank" rel="noopener noreferrer">
            View Resource
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ResourceCard;
