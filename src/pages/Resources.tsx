
import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import ResourceList from '@/components/resources/ResourceList';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Search } from 'lucide-react';

const Resources = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentFilter, setCurrentFilter] = useState('all');
  const [tempSearch, setTempSearch] = useState('');
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchQuery(tempSearch);
  };
  
  return (
    <Layout>
      <div className="mindmate-container">
        <h1 className="text-3xl font-bold text-mindmate-primary mb-4">Mental Health Resources</h1>
        <p className="text-muted-foreground mb-8 max-w-3xl">
          Explore our curated collection of mental health resources, including articles, videos, guided meditations, and exercises to support your wellbeing journey.
        </p>
        
        <form onSubmit={handleSearch} className="flex gap-4 mb-8">
          <div className="relative w-full max-w-lg">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              type="search"
              placeholder="Search resources..."
              value={tempSearch}
              onChange={(e) => setTempSearch(e.target.value)}
              className="pl-10"
            />
          </div>
          <Button type="submit">Search</Button>
        </form>
        
        <Tabs defaultValue="all" className="mb-8" onValueChange={setCurrentFilter}>
          <TabsList>
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="article">Articles</TabsTrigger>
            <TabsTrigger value="video">Videos</TabsTrigger>
            <TabsTrigger value="meditation">Meditations</TabsTrigger>
            <TabsTrigger value="exercise">Exercises</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="mt-6">
            <ResourceList searchQuery={searchQuery} filter="all" />
          </TabsContent>
          <TabsContent value="article" className="mt-6">
            <p className="text-muted-foreground mb-4">Articles about mental health and wellbeing.</p>
            <ResourceList searchQuery={searchQuery} filter="article" />
          </TabsContent>
          <TabsContent value="video" className="mt-6">
            <p className="text-muted-foreground mb-4">Educational videos about mental health topics.</p>
            <ResourceList searchQuery={searchQuery} filter="video" />
          </TabsContent>
          <TabsContent value="meditation" className="mt-6">
            <p className="text-muted-foreground mb-4">Guided meditations for relaxation and mindfulness.</p>
            <ResourceList searchQuery={searchQuery} filter="meditation" />
          </TabsContent>
          <TabsContent value="exercise" className="mt-6">
            <p className="text-muted-foreground mb-4">Practical exercises to improve mental wellbeing.</p>
            <ResourceList searchQuery={searchQuery} filter="exercise" />
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Resources;
