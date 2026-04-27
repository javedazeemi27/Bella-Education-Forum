import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, BookOpen, GraduationCap, MessageSquare, Newspaper, FileText, Globe, Search, User, ChevronRight, Play, Download, CheckCircle, Clock, Calendar, Youtube, Mail, Facebook, Twitter, Instagram, Linkedin, ArrowRight } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { COURSES, CATEGORIES, TESTIMONIALS, Course } from './constants';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Components ---

const Navbar = ({ lang, setLang }: { lang: string, setLang: (l: string) => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Courses', path: '/courses' },
    { name: 'Resources', path: '/resources' },
    { name: 'About', path: '/about' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-black text-white border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-brand-yellow p-1.5 rounded-sm">
              <GraduationCap className="w-8 h-8 text-black" />
            </div>
            <div className="hidden sm:block">
              <span className="text-xl font-serif font-bold tracking-tight">Education <span className="text-brand-yellow">for All</span></span>
              <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-400 font-medium">Knowledge for everyone</p>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-brand-yellow uppercase tracking-wider",
                  location.pathname === link.path ? "text-brand-yellow underline underline-offset-4" : "text-neutral-300"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-2 bg-neutral-900 px-3 py-1.5 rounded-full border border-white/5">
              <Globe className="w-4 h-4 text-neutral-400" />
              <select 
                value={lang}
                onChange={(e) => setLang(e.target.value)}
                className="bg-transparent text-xs font-semibold outline-none cursor-pointer"
              >
                <option value="en">English</option>
                <option value="ur">Urdu</option>
                <option value="sd">Sindhi</option>
              </select>
            </div>
            <Link to="/portal" className="bg-brand-yellow text-black px-6 py-2.5 rounded-sm font-bold text-sm uppercase transition-transform hover:scale-105 active:scale-95 shadow-lg shadow-brand-yellow/20">
              Student Portal
            </Link>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white p-2">
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-neutral-950 border-b border-white/10 py-6 px-4 space-y-4"
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="block text-lg font-serif font-bold text-white hover:text-brand-yellow"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 flex flex-col space-y-4 border-t border-white/5">
               <Link to="/portal" onClick={() => setIsOpen(false)} className="bg-brand-yellow text-black text-center py-4 rounded-sm font-bold uppercase">
                Student Portal
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-black text-white py-16 border-t border-white/10 overflow-hidden relative">
    <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-yellow opacity-[0.02] transform skew-x-12 translate-x-1/2"></div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center space-x-2 mb-6">
            <div className="bg-brand-yellow p-1 rounded-sm">
              <GraduationCap className="w-6 h-6 text-black" />
            </div>
            <span className="text-2xl font-serif font-bold tracking-tight">Education <span className="text-brand-yellow">for All</span></span>
          </div>
          <p className="text-neutral-400 text-lg mb-8 max-w-md font-light leading-relaxed italic">
            "To make higher education accessible, affordable and understandable for every student."
          </p>
          <div className="flex space-x-4">
            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 bg-neutral-900 rounded-full flex items-center justify-center hover:bg-brand-yellow hover:text-black transition-all">
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
        
        <div>
          <h4 className="font-serif text-xl font-bold mb-6 text-brand-yellow">Explore</h4>
          <ul className="space-y-4 text-neutral-400 font-medium">
            <li><Link to="/courses" className="hover:text-white transition-colors">Course Catalog</Link></li>
            <li><Link to="/resources" className="hover:text-white transition-colors">Study Resources</Link></li>
            <li><Link to="/blog" className="hover:text-white transition-colors">Knowledge Hub</Link></li>
            <li><Link to="/portal" className="hover:text-white transition-colors">Student Portal</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-xl font-bold mb-6 text-brand-yellow">Resources</h4>
          <ul className="space-y-4 text-neutral-400 font-medium">
            <li><a href="#" className="hover:text-white transition-colors">Past Papers</a></li>
            <li><a href="#" className="hover:text-white transition-colors">MCQs Database</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Career Advice</a></li>
            <li><Link to="/contact" className="hover:text-white transition-colors">Email Support</Link></li>
          </ul>
        </div>
      </div>
      
      <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-sm text-neutral-500 font-medium uppercase tracking-widest">
        <p>&copy; 2026 Education for All. All Rights Reserved.</p>
        <p className="mt-4 md:mt-0 flex items-center space-x-4">
          <span className="text-brand-yellow italic">Learn Today, Lead Tomorrow</span>
          <span className="w-1.5 h-1.5 bg-neutral-800 rounded-full"></span>
          <span>Your Gateway to Higher Education</span>
        </p>
      </div>
    </div>
  </footer>
);

// --- Pages ---

const Home = () => {
  return (
    <div className="bg-neutral-50">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1517673132405-a56a62b18caf?q=80&w=2076&auto=format&fit=crop" 
            alt="Hero Background" 
            className="w-full h-full object-cover opacity-30 scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="flex items-center space-x-3 mb-6">
               <div className="h-0.5 w-12 bg-brand-yellow"></div>
               <span className="text-brand-yellow font-bold uppercase tracking-[0.3em] text-sm md:text-base">Empowering Future Leaders</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-serif font-bold text-white leading-tight mb-8">
              Education for All – <br />
              <span className="text-brand-yellow italic">Learn Without Limits</span>
            </h1>
            <p className="text-xl md:text-2xl text-neutral-300 mb-10 leading-relaxed font-light max-w-2xl">
              Empowering students with quality higher education resources accessible to everyone, anywhere, anytime.
            </p>
            <div className="flex flex-wrap gap-6">
              <Link to="/courses" className="bg-brand-yellow text-black px-10 py-5 rounded-sm font-bold text-lg uppercase transition-all hover:bg-white hover:-translate-y-1 shadow-2xl">
                Start Learning
              </Link>
              <Link to="/courses" className="border-2 border-white text-white px-10 py-5 rounded-sm font-bold text-lg uppercase transition-all hover:bg-white/10 hover:-translate-y-1">
                Explore Courses
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8">
           <span className="text-[200px] font-serif font-bold text-neutral-100/10 leading-none select-none">ABOUT</span>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-serif font-bold mb-10 text-neutral-950">
                Our Mission <br /> & <span className="text-brand-yellow underline decoration-black decoration-4 un-offset-8">Vision</span>
              </h2>
              <div className="space-y-10">
                <div className="flex gap-6">
                  <div className="w-16 h-16 bg-brand-yellow shrink-0 flex items-center justify-center rounded-sm rotate-3 shadow-lg">
                    <GraduationCap className="w-8 h-8 text-black" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-serif font-bold mb-3">Our Mission</h3>
                    <p className="text-lg text-neutral-600 leading-relaxed">
                      To make higher education accessible, affordable and understandable for every student through high-quality digitized resources.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-16 h-16 bg-black shrink-0 flex items-center justify-center rounded-sm -rotate-3 shadow-lg">
                    <Globe className="w-8 h-8 text-brand-yellow" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-serif font-bold mb-3">Our Vision</h3>
                    <p className="text-lg text-neutral-600 leading-relaxed">
                      A world where education is available to all without barriers, transcending geographical and financial limitations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-[4/5] bg-black rounded-sm overflow-hidden yellow-accent-shadow">
                <img 
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop" 
                  alt="Student learning"
                  className="w-full h-full object-cover opacity-90 transition-transform duration-700 hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-brand-yellow p-10 black-accent-shadow max-w-xs">
                <p className="font-serif font-bold text-xl italic mb-2">"Education is the most powerful weapon which you can use to change the world."</p>
                <p className="text-sm font-bold uppercase tracking-widest text-black/60">— Nelson Mandela</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-32 bg-neutral-100 high-contrast-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-neutral-950">
                Top Rated <span className="italic">Courses</span>
              </h2>
              <p className="text-xl text-neutral-600 max-w-2xl font-medium">Explore our highly curated resources across multiple disciplines.</p>
            </div>
            <Link to="/courses" className="group flex items-center space-x-3 text-lg font-bold uppercase tracking-widest hover:text-brand-yellow transition-colors">
              <span>View All Courses</span>
               <div className="w-12 h-0.5 bg-black group-hover:bg-brand-yellow transition-colors"></div>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {COURSES.slice(0, 3).map((course, idx) => (
              <motion.div
                key={course.id}
                whileHover={{ y: -10 }}
                className="bg-white border-2 border-black flex flex-col group"
              >
                <div className="relative aspect-video overflow-hidden border-b-2 border-black">
                   <div className="absolute top-4 left-4 z-10 bg-brand-yellow text-black text-[10px] uppercase font-bold px-3 py-1 border border-black italic">
                    {course.category}
                   </div>
                   <div className="bg-black/10 w-full h-full flex items-center justify-center p-12">
                      <course.icon className="w-20 h-20 text-black/20 group-hover:text-brand-yellow group-hover:scale-110 transition-all duration-500" />
                   </div>
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <span className={cn(
                      "text-[10px] font-bold uppercase px-2 py-0.5 rounded-sm border",
                      course.difficulty === 'Advanced' ? "border-red-500 text-red-500 bg-red-50" :
                      course.difficulty === 'Intermediate' ? "border-blue-500 text-blue-500 bg-blue-50" :
                      "border-green-500 text-green-500 bg-green-50"
                    )}>
                      {course.difficulty}
                    </span>
                    <div className="flex items-center text-xs font-bold text-neutral-400">
                      <Clock className="w-3.5 h-3.5 mr-1" />
                      {course.duration}
                    </div>
                  </div>
                  <h3 className="text-2xl font-serif font-bold mb-4 group-hover:text-brand-yellow transition-colors">{course.title}</h3>
                  <p className="text-neutral-600 mb-8 flex-1 leading-relaxed">
                    {course.overview}
                  </p>
                  <Link to={`/courses/${course.id}`} className="mt-auto bg-black text-white py-4 rounded-sm font-bold text-center uppercase tracking-widest group-hover:bg-brand-yellow group-hover:text-black transition-all">
                    Course Preview
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-black text-white relative overflow-hidden">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
           <div className="text-center mb-20">
             <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6">Student <span className="text-brand-yellow italic">Voice</span></h2>
             <p className="text-xl text-neutral-400 font-medium tracking-wide">Real impact on students across the region.</p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
             {TESTIMONIALS.map((t, i) => (
               <div key={i} className="bg-neutral-900 border border-white/10 p-10 relative">
                 <div className="absolute -top-6 left-10 w-12 h-12 bg-brand-yellow rounded-sm flex items-center justify-center border-4 border-black">
                   <span className="text-black text-3xl font-serif font-bold">"</span>
                 </div>
                 <p className="text-xl italic text-neutral-300 mb-8 leading-relaxed">
                   {t.quote}
                 </p>
                 <div className="flex items-center">
                   <div className="w-12 h-12 bg-neutral-800 rounded-full mr-4 flex items-center justify-center font-bold text-brand-yellow font-serif border border-white/20">
                     {t.name[0]}
                   </div>
                   <div>
                     <p className="font-bold text-lg">{t.name}</p>
                     <p className="text-brand-yellow text-xs uppercase font-bold tracking-widest">{t.role}</p>
                   </div>
                 </div>
               </div>
             ))}
           </div>
         </div>
         <div className="absolute bottom-0 left-1/2 -translate-x-1/2 p-20 opacity-[0.03]">
           <GraduationCap className="w-[600px] h-[600px] text-white" />
         </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-brand-yellow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
           <h2 className="text-4xl md:text-7xl font-serif font-bold text-black mb-10 leading-tight">
             Ready to Start Your <br /> <span className="underline decoration-black decoration-8 underline-offset-16">Academic Journey?</span>
           </h2>
           <div className="flex flex-col md:flex-row justify-center gap-6">
             <Link to="/portal" className="bg-black text-white px-12 py-6 rounded-sm font-bold text-xl uppercase shadow-2xl transition-all hover:scale-105 active:scale-95">
               Join Now for Free
             </Link>
             <Link to="/courses" className="border-4 border-black text-black px-12 py-6 rounded-sm font-bold text-xl uppercase transition-all hover:bg-black hover:text-white">
               Explore Resources
             </Link>
           </div>
        </div>
      </section>
    </div>
  );
};

const CourseCatalog = () => {
  const [filter, setFilter] = useState('All');
  
  const filteredCourses = filter === 'All' 
    ? COURSES 
    : COURSES.filter(c => c.category === filter);

  return (
    <div className="min-h-screen bg-neutral-50 pt-20 pb-32">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-20">
            <h1 className="text-6xl md:text-8xl font-serif font-bold text-neutral-950 mb-8">
              Explore <span className="text-brand-yellow italic">Catalog</span>
            </h1>
            <div className="h-2 w-32 bg-black mb-10"></div>
            
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => setFilter('All')}
                className={cn(
                  "px-8 py-3 rounded-sm font-bold uppercase transition-all border-2",
                  filter === 'All' ? "bg-black text-white border-black" : "bg-white text-black border-neutral-200 hover:border-black"
                )}
              >
                All Subjects
              </button>
              {CATEGORIES.map(cat => (
                <button 
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={cn(
                    "px-8 py-3 rounded-sm font-bold uppercase transition-all border-2",
                    filter === cat ? "bg-black text-white border-black" : "bg-white text-black border-neutral-200 hover:border-black"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredCourses.map((course) => (
              <motion.div
                layout
                key={course.id}
                className="bg-white border-2 border-black group"
              >
                 <div className="relative aspect-video overflow-hidden border-b-2 border-black">
                   <div className="absolute top-4 left-4 z-10 bg-brand-yellow text-black text-[10px] uppercase font-bold px-3 py-1 border border-black italic">
                    {course.category}
                   </div>
                   <div className="bg-black/10 w-full h-full flex items-center justify-center p-12">
                      <course.icon className="w-20 h-20 text-black/20 group-hover:text-brand-yellow group-hover:scale-110 transition-all duration-500" />
                   </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-serif font-bold mb-4 group-hover:text-brand-yellow transition-colors">{course.title}</h3>
                  <div className="flex items-center space-x-4 mb-6 text-sm text-neutral-500 font-bold uppercase">
                     <span className="flex items-center"><User className="w-4 h-4 mr-1.5" /> {course.instructor}</span>
                  </div>
                  <p className="text-neutral-600 mb-8 border-l-2 border-brand-yellow pl-4 italic">
                    {course.overview}
                  </p>
                  <Link to={`/courses/${course.id}`} className="block w-full bg-black text-white py-4 rounded-sm font-bold text-center uppercase tracking-widest group-hover:bg-brand-yellow group-hover:text-black transition-all">
                    View Materials
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
       </div>
    </div>
  );
};

const ResourceHub = () => {
  return (
    <div className="min-h-screen bg-neutral-950 text-white pt-20 pb-32">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-10">
            <div>
              <h1 className="text-6xl md:text-8xl font-serif font-bold mb-6">
                Resource <span className="text-brand-yellow">Hub</span>
              </h1>
              <p className="text-xl text-neutral-400 font-light max-w-2xl">Downloadable PDFs, past papers, MCQs and verified study guides for your preparation.</p>
            </div>
            <div className="relative w-full md:w-96">
               <input 
                type="text" 
                placeholder="Search resources..." 
                className="w-full bg-neutral-900 border border-white/20 rounded-sm py-4 px-12 focus:outline-none focus:border-brand-yellow transition-all"
               />
               <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500 w-5 h-5" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Past Papers', count: '1200+ Files', icon: FileText, color: 'bg-blue-500' },
              { title: 'Study Guides', count: '450+ Guides', icon: BookOpen, color: 'bg-brand-yellow text-black' },
              { title: 'MCQ Database', count: '5000+ Questions', icon: CheckCircle, color: 'bg-green-500' },
              { title: 'Video Vault', count: '300+ Lectures', icon: Youtube, color: 'bg-red-500' },
            ].map((box, i) => (
              <div key={i} className="bg-neutral-900 p-8 border border-white/10 group cursor-pointer hover:border-brand-yellow/50 transition-all">
                 <div className={cn("w-16 h-16 rounded-sm mb-6 flex items-center justify-center", box.color)}>
                    <box.icon className="w-8 h-8" />
                 </div>
                 <h3 className="text-2xl font-serif font-bold mb-2">{box.title}</h3>
                 <p className="text-neutral-400 text-sm font-bold uppercase tracking-widest">{box.count}</p>
                 <div className="mt-8 flex items-center text-brand-yellow font-bold text-sm uppercase">
                   Browse Files <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                 </div>
              </div>
            ))}
          </div>

          <div className="mt-20">
            <h2 className="text-3xl font-serif font-bold mb-10 text-brand-yellow">Recently Added Exams</h2>
            <div className="space-y-4">
              {[
                { title: 'Chemistry Intermediate Pt II - 2023 Karachi Board', type: 'Past Paper', size: '2.4 MB' },
                { title: 'Physics MCQs for Entrance Test Preparation', type: 'Study Guide', size: '4.1 MB' },
                { title: 'Business Ethics & Globalization Notes', type: 'Notes', size: '1.2 MB' },
                { title: 'Introduction to Algorithms Revision Guide', type: 'Guide', size: '5.6 MB' },
              ].map((item, i) => (
                <div key={i} className="bg-neutral-900/50 p-6 flex flex-col md:flex-row justify-between items-center border border-white/5 hover:bg-neutral-900 transition-colors">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-neutral-800 rounded-sm flex items-center justify-center mr-6">
                      <Download className="w-5 h-5 text-neutral-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold">{item.title}</h4>
                      <span className="text-xs font-bold uppercase text-neutral-500">{item.type}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-6 mt-4 md:mt-0">
                    <span className="text-sm font-mono text-neutral-500">{item.size}</span>
                    <button className="bg-white text-black px-6 py-2 rounded-sm font-bold text-sm uppercase hover:bg-brand-yellow transition-colors">
                      Download PDF
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
       </div>
    </div>
  );
};

const Portal = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isAuth, setIsAuth] = useState(false);

  if (isAuth) {
    return (
      <div className="min-h-screen bg-neutral-50 pt-10 pb-20">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
              <div className="flex items-center space-x-4">
                 <div className="w-20 h-20 bg-brand-yellow flex items-center justify-center rounded-sm text-black font-serif text-4xl font-bold shadow-lg">
                   J
                 </div>
                 <div>
                   <h1 className="text-3xl font-serif font-bold">Welcome Back, <span className="text-brand-yellow bg-black px-2">Javed!</span></h1>
                   <p className="text-neutral-500 font-medium italic">Your Gateway to Higher Education Dashboard</p>
                 </div>
              </div>
              <div className="flex gap-4">
                <button onClick={() => setIsAuth(false)} className="bg-black text-white px-6 py-3 rounded-sm font-bold uppercase text-sm">Logout</button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
               <div className="lg:col-span-2 space-y-10">
                  <section className="bg-white p-8 mb-10 yellow-accent-shadow border-2 border-black">
                     <h2 className="text-2xl font-serif font-bold mb-6 flex items-center">
                       <Play className="w-6 h-6 mr-3 text-brand-yellow fill-current" />
                       Continue Learning
                     </h2>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[COURSES[0], COURSES[1]].map(c => (
                          <div key={c.id} className="group cursor-pointer">
                             <div className="aspect-video bg-neutral-100 mb-4 border border-black overflow-hidden relative">
                                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                   <Play className="w-12 h-12 text-brand-yellow fill-current" />
                                </div>
                             </div>
                             <h3 className="font-bold text-lg mb-1">{c.title}</h3>
                             <div className="w-full bg-neutral-200 h-1.5 rounded-full mb-2 overflow-hidden">
                               <div className="bg-brand-yellow h-full w-2/3"></div>
                             </div>
                             <p className="text-xs font-bold text-neutral-400 uppercase tracking-widest">67% Complete • Next: Module 4</p>
                          </div>
                        ))}
                     </div>
                  </section>

                  <section className="bg-white p-8 border-2 border-black high-contrast-grid">
                     <h2 className="text-2xl font-serif font-bold mb-6 flex items-center">
                       <Calendar className="w-6 h-6 mr-3 text-brand-yellow" />
                       Upcoming Live Classes
                     </h2>
                     <div className="space-y-4">
                        {[
                          { title: 'Organic Chemistry Q&A', time: 'Today, 4:00 PM', instructor: 'Dr. Sarah', type: 'Zoom' },
                          { title: 'Advanced Calculus Workshop', time: 'Tomorrow, 10:00 AM', instructor: 'Prof. Michael', type: 'Google Meet' },
                        ].map((live, i) => (
                          <div key={i} className="flex flex-col md:flex-row justify-between items-center p-6 bg-neutral-50 border border-neutral-200">
                             <div className="flex items-center mb-4 md:mb-0">
                                <div className="w-12 h-12 bg-black flex flex-col items-center justify-center text-brand-yellow rounded-sm mr-4 shrink-0">
                                   <span className="text-xs font-bold font-mono leading-none">APR</span>
                                   <span className="text-xl font-bold font-mono leading-none">28</span>
                                </div>
                                <div>
                                   <h4 className="font-bold text-lg">{live.title}</h4>
                                   <p className="text-sm text-neutral-500 italic">{live.time} • {live.instructor}</p>
                                </div>
                             </div>
                             <button className="bg-brand-yellow text-black px-8 py-3 rounded-sm font-bold uppercase text-sm shadow hover:scale-105 transition-transform active:scale-95">
                                Join {live.type}
                             </button>
                          </div>
                        ))}
                     </div>
                  </section>
               </div>

               <div className="space-y-10">
                  <section className="bg-black text-white p-8 border-2 border-brand-yellow">
                      <h2 className="text-xl font-serif font-bold mb-6 border-b border-white/10 pb-4">Activity Stats</h2>
                      <div className="grid grid-cols-2 gap-6">
                         <div className="text-center">
                            <p className="text-4xl font-serif font-bold text-brand-yellow">12</p>
                            <p className="text-[10px] uppercase font-bold text-neutral-400">Courses</p>
                         </div>
                         <div className="text-center">
                            <p className="text-4xl font-serif font-bold text-brand-yellow">48h</p>
                            <p className="text-[10px] uppercase font-bold text-neutral-400">Watched</p>
                         </div>
                         <div className="text-center">
                            <p className="text-4xl font-serif font-bold text-brand-yellow">85%</p>
                            <p className="text-[10px] uppercase font-bold text-neutral-400">Avg Score</p>
                         </div>
                         <div className="text-center">
                            <p className="text-4xl font-serif font-bold text-brand-yellow">5</p>
                            <p className="text-[10px] uppercase font-bold text-neutral-400">Tests Done</p>
                         </div>
                      </div>
                  </section>

                  <section className="bg-white p-8 border-2 border-black">
                     <h2 className="text-xl font-serif font-bold mb-6">Career Advice</h2>
                     <div className="space-y-4">
                        {[
                          'Top 5 High-Paying Tech Jobs in 2026',
                          'How to ace your Medical Entry Test',
                          'Building a portfolio for Arts major',
                        ].map((tip, i) => (
                          <div key={i} className="flex group cursor-pointer">
                             <div className="w-1 h-12 bg-neutral-200 group-hover:bg-brand-yellow transition-colors mr-4"></div>
                             <p className="font-medium text-sm hover:text-brand-yellow transition-colors">{tip}</p>
                          </div>
                        ))}
                     </div>
                     <Link to="/blog" className="mt-8 block text-center text-xs font-bold uppercase tracking-widest text-neutral-500 hover:text-black">
                       See All Study Tips
                     </Link>
                  </section>
               </div>
            </div>
         </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-50 flex items-center justify-center py-20 px-4 high-contrast-grid">
       <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-5xl bg-white border-2 border-black flex flex-col md:flex-row overflow-hidden shadow-2xl"
       >
          <div className="md:w-1/2 bg-black p-12 text-white flex flex-col justify-between relative overflow-hidden">
             <div className="relative z-10">
                <Link to="/" className="flex items-center space-x-2 mb-12">
                   <div className="bg-brand-yellow p-1 rounded-sm">
                      <GraduationCap className="w-8 h-8 text-black" />
                   </div>
                   <span className="text-2xl font-serif font-bold tracking-tight">Education <span className="text-brand-yellow">for All</span></span>
                </Link>
                <h2 className="text-5xl font-serif font-bold mb-6 leading-tight">
                  {isLogin ? "Welcome back to your" : "Start your journey into"} <br />
                  <span className="text-brand-yellow italic">Academic Success.</span>
                </h2>
                <p className="text-neutral-400 text-lg font-light leading-relaxed">
                  Join thousands of students learning Science, Tech, and Arts without any boundaries.
                </p>
             </div>
             
             <div className="relative z-10 pt-10">
                <div className="flex -space-x-4 mb-4">
                   {[1,2,3,4].map(n => (
                     <div key={n} className="w-10 h-10 rounded-full bg-neutral-800 border-2 border-black flex items-center justify-center font-bold text-xs">
                        {String.fromCharCode(64 + n)}
                     </div>
                   ))}
                   <div className="w-10 h-10 rounded-full bg-brand-yellow border-2 border-black flex items-center justify-center font-bold text-xs text-black">
                      +1k
                   </div>
                </div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-500">Trusted by over 10,000 students</p>
             </div>
             
             <div className="absolute top-0 right-0 w-64 h-64 bg-brand-yellow/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
          </div>

          <div className="md:w-1/2 p-12 bg-white">
             <div className="flex mb-10 border-b-2 border-neutral-100">
                <button 
                  onClick={() => setIsLogin(true)}
                  className={cn("pb-4 pr-10 text-lg font-serif font-bold transition-all relative", isLogin ? "text-neutral-900" : "text-neutral-300")}
                >
                  Login
                  {isLogin && <motion.div layoutId="auth-tab" className="absolute bottom-[-2px] left-0 right-10 h-1 bg-brand-yellow" />}
                </button>
                <button 
                  onClick={() => setIsLogin(false)}
                  className={cn("pb-4 text-lg font-serif font-bold transition-all relative", !isLogin ? "text-neutral-900" : "text-neutral-300")}
                >
                  Sign Up
                  {!isLogin && <motion.div layoutId="auth-tab" className="absolute bottom-[-2px] left-0 right-0 h-1 bg-brand-yellow" />}
                </button>
             </div>

             <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); setIsAuth(true); }}>
                {!isLogin && (
                   <div>
                      <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-neutral-400">Full Name</label>
                      <input 
                        type="text" 
                        required
                        className="w-full bg-neutral-50 border-2 border-neutral-100 rounded-sm py-4 px-4 focus:outline-none focus:border-brand-yellow transition-all font-medium" 
                        placeholder="John Doe"
                      />
                   </div>
                )}
                <div>
                   <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-neutral-400">Email Address</label>
                   <input 
                    type="email" 
                    required
                    className="w-full bg-neutral-50 border-2 border-neutral-100 rounded-sm py-4 px-4 focus:outline-none focus:border-brand-yellow transition-all font-medium" 
                    placeholder="javed@example.com"
                   />
                </div>
                <div>
                   <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-neutral-400">Password</label>
                   <input 
                    type="password" 
                    required
                    className="w-full bg-neutral-50 border-2 border-neutral-100 rounded-sm py-4 px-4 focus:outline-none focus:border-brand-yellow transition-all font-medium" 
                    placeholder="••••••••"
                   />
                </div>
                
                <button type="submit" className="w-full bg-black text-white py-5 rounded-sm font-bold uppercase tracking-widest text-lg shadow-xl hover:bg-brand-yellow hover:text-black transition-all">
                  {isLogin ? "Sign In" : "Create Account"}
                </button>

                <div className="relative py-4">
                   <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-neutral-100"></div></div>
                   <div className="relative flex justify-center text-xs uppercase font-bold text-neutral-400"><span className="bg-white px-2">Or continue with</span></div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                   <button type="button" className="flex items-center justify-center space-x-3 border-2 border-neutral-100 py-4 rounded-sm hover:border-black transition-all">
                      <Globe className="w-5 h-5" />
                      <span className="font-bold text-xs uppercase">Google</span>
                   </button>
                   <button type="button" className="flex items-center justify-center space-x-3 border-2 border-neutral-100 py-4 rounded-sm hover:border-black transition-all">
                      <Facebook className="w-5 h-5" />
                      <span className="font-bold text-xs uppercase">Facebook</span>
                   </button>
                </div>
             </form>
          </div>
       </motion.div>
    </div>
  );
};

const Contact = () => {
  const [formState, setFormState] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('sending');
    setTimeout(() => setFormState('sent'), 1500);
  };

  return (
    <div className="min-h-screen bg-neutral-50 pt-20 pb-32">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
             <div>
                <h1 className="text-6xl md:text-8xl font-serif font-bold text-neutral-950 mb-10 leading-tight">
                  Get in <span className="text-brand-yellow bg-black px-4 italic">Touch.</span>
                </h1>
                <p className="text-xl text-neutral-600 mb-12 leading-relaxed">
                  Have questions about our courses or resources? Our support team is here to help you on your academic journey.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
                   <div className="bg-white p-8 border-2 border-black flex flex-col items-center text-center group transition-all hover:bg-brand-yellow">
                      <div className="w-12 h-12 bg-neutral-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-black group-hover:text-white transition-all">
                         <Mail className="w-5 h-5" />
                      </div>
                      <h3 className="font-serif font-bold text-xl mb-2 uppercase">Email Support</h3>
                      <p className="text-sm font-medium text-neutral-500 group-hover:text-black">support@eduforall.com</p>
                   </div>
                   <div className="bg-white p-8 border-2 border-black flex flex-col items-center text-center group transition-all hover:bg-black hover:text-white">
                      <div className="w-12 h-12 bg-neutral-50 border border-neutral-200 rounded-full flex items-center justify-center mb-6 group-hover:bg-brand-yellow group-hover:text-black transition-all">
                         <MessageSquare className="w-5 h-5" />
                      </div>
                      <h3 className="font-serif font-bold text-xl mb-2 uppercase">Live Chat</h3>
                      <p className="text-sm font-medium text-neutral-500 group-hover:text-white/60">Available 9am - 6pm PKT</p>
                   </div>
                </div>

                <div className="flex items-center space-x-6">
                   {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                     <a key={i} href="#" className="w-10 h-10 border-2 border-black rounded-sm flex items-center justify-center hover:bg-brand-yellow transition-all">
                       <Icon className="w-5 h-5" />
                     </a>
                   ))}
                </div>
             </div>

             <div className="bg-white p-12 border-2 border-black black-accent-shadow">
                <h2 className="text-3xl font-serif font-bold mb-10">Send a Message</h2>
                {formState === 'sent' ? (
                   <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="h-full flex flex-col items-center justify-center py-20 text-center"
                   >
                      <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6 text-green-600">
                         <CheckCircle className="w-10 h-10" />
                      </div>
                      <h3 className="text-2xl font-serif font-bold mb-2">Message Sent Successfully!</h3>
                      <p className="text-neutral-500">We will get back to you within 24 hours.</p>
                      <button 
                        onClick={() => setFormState('idle')} 
                        className="mt-10 font-bold uppercase text-xs tracking-widest underline underline-offset-4"
                      >
                        Send another message
                      </button>
                   </motion.div>
                ) : (
                   <form className="space-y-8" onSubmit={handleSubmit}>
                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        <div>
                           <label className="block text-xs font-bold uppercase tracking-widest mb-3 text-neutral-400">Full Name</label>
                           <input type="text" required className="w-full bg-neutral-50 border border-neutral-200 rounded-sm py-4 px-4 focus:outline-none focus:border-brand-yellow transition-all" />
                        </div>
                        <div>
                           <label className="block text-xs font-bold uppercase tracking-widest mb-3 text-neutral-400">Email Address</label>
                           <input type="email" required className="w-full bg-neutral-50 border border-neutral-200 rounded-sm py-4 px-4 focus:outline-none focus:border-brand-yellow transition-all" />
                        </div>
                     </div>
                     <div>
                        <label className="block text-xs font-bold uppercase tracking-widest mb-3 text-neutral-400">Message</label>
                        <textarea rows={5} required className="w-full bg-neutral-50 border border-neutral-200 rounded-sm py-4 px-4 focus:outline-none focus:border-brand-yellow transition-all"></textarea>
                     </div>
                     <button type="submit" disabled={formState === 'sending'} className="w-full bg-black text-white py-5 rounded-sm font-bold uppercase tracking-widest text-lg transition-all hover:bg-brand-yellow hover:text-black shadow-xl disabled:opacity-50">
                       {formState === 'sending' ? "Processing..." : "Send Message"}
                     </button>
                   </form>
                )}
             </div>
          </div>
       </div>
    </div>
  );
};

// --- More Pages ---

const Blog = () => (
  <div className="min-h-screen bg-neutral-50 pt-20 pb-32">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-6xl md:text-8xl font-serif font-bold text-neutral-950 mb-10">Knowledge <span className="text-brand-yellow italic">Hub</span></h1>
      <p className="text-xl text-neutral-600 mb-20 max-w-2xl font-medium">Study tips, exam preparation, and career advice directly from educators.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {[
          { title: "How to Manage Your Study Time Effectively", author: "Dr. Ahmed", date: "April 15, 2026", category: "Career Advice" },
          { title: "Top 10 Resources for Medical Entry Tests", author: "Prof. Michael", date: "April 12, 2026", category: "Study Tips" },
          { title: "Understanding Quantum Physics through Visualization", author: "Sarah Jane", date: "April 8, 2026", category: "Physics" },
          { title: "Transitioning from School to Higher Education", author: "Isabella Vance", date: "April 5, 2026", category: "Career Advice" },
          { title: "Mathematical Proofs: A Guide for Beginners", author: "Liam Neeson", date: "March 30, 2026", category: "Mathematics" },
          { title: "Modern Marketing Trends in the Digital Age", author: "Elena R.", date: "March 22, 2026", category: "Business" },
        ].map((v, i) => (
          <div key={i} className="group cursor-pointer">
            <div className="aspect-[16/10] bg-neutral-200 mb-6 border-b-4 border-black group-hover:border-brand-yellow transition-all overflow-hidden">
               <img src={`https://picsum.photos/seed/${i+40}/800/500`} className="w-full h-full object-cover transition-transform group-hover:scale-105" alt="blog" referrerPolicy="no-referrer" />
            </div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-brand-yellow bg-black px-2 py-0.5">{v.category}</span>
            <h3 className="text-2xl font-serif font-bold mt-4 mb-3 group-hover:text-brand-yellow transition-colors">{v.title}</h3>
            <p className="text-sm text-neutral-500 font-medium italic">{v.date} • By {v.author}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const About = () => (
   <div className="min-h-screen bg-neutral-50">
      <section className="bg-black text-white py-40 relative overflow-hidden">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <h1 className="text-7xl md:text-9xl font-serif font-bold text-brand-yellow mb-10 italic">Our Story.</h1>
            <p className="text-2xl md:text-4xl font-light max-w-4xl leading-tight">
              A decade of commitment to democratization of <span className="text-brand-yellow">higher education</span> in the region and beyond.
            </p>
         </div>
         <div className="absolute top-0 right-0 p-20 opacity-[0.05]">
            <BookOpen className="w-[800px] h-[800px]" />
         </div>
      </section>

      <section className="py-32">
         <div className="max-w-5xl mx-auto px-4">
            <div className="prose prose-xl font-serif text-neutral-800 leading-relaxed max-w-none">
               <p className="mb-10 text-3xl italic">"Education for All was founded on a simple principle: talent is universal, but opportunity is not."</p>
               <p className="mb-8">We believe that every student, regardless of their financial or geographical situation, deserves access to world-class higher education. Our platform brings together the best educators and resources to create an ecosystem that is both understandable and affordable.</p>
               <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-20 mb-20">
                  <div className="bg-white p-10 border-2 border-black text-center">
                    <p className="text-5xl font-mono font-bold mb-2">10k+</p>
                    <p className="text-xs font-bold uppercase tracking-widest text-neutral-400">Students Joined</p>
                  </div>
                  <div className="bg-brand-yellow p-10 border-2 border-black text-center">
                    <p className="text-5xl font-mono font-bold mb-2">500+</p>
                    <p className="text-xs font-bold uppercase tracking-widest text-neutral-900/60">Courses & Resources</p>
                  </div>
                  <div className="bg-white p-10 border-2 border-black text-center">
                    <p className="text-5xl font-mono font-bold mb-2">50+</p>
                    <p className="text-xs font-bold uppercase tracking-widest text-neutral-400">Expert Instructors</p>
                  </div>
               </div>
               <p>Our journey continues with the integration of live classes, interactive quizzes, and a multi-language notification system that ensures no student is left behind. Join us in our mission to learn today and lead tomorrow.</p>
            </div>
         </div>
      </section>
   </div>
);

const CourseDetail = () => {
  return (
    <div className="min-h-screen bg-neutral-950 text-white pt-20 pb-32">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
             <div className="lg:w-2/3">
                <div className="aspect-video bg-neutral-900 border-2 border-white/10 relative group mb-8">
                   <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-24 h-24 bg-brand-yellow text-black rounded-full flex items-center justify-center cursor-pointer transition-transform hover:scale-110 shadow-2xl">
                         <Play className="w-10 h-10 fill-current" />
                      </div>
                   </div>
                   <div className="absolute bottom-10 left-10">
                      <h4 className="text-sm font-bold uppercase tracking-widest text-brand-yellow mb-2">Ongoing Lecture</h4>
                      <h3 className="text-3xl font-serif font-bold">Introduction to Lagrangian Mechanics</h3>
                   </div>
                </div>

                <div className="flex border-b border-white/10 mb-8 overflow-x-auto no-scrollbar">
                   {['Overview', 'curriculum', 'Resources', 'Quiz'].map((tab, i) => (
                      <button key={i} className={cn("px-8 py-4 text-sm font-bold uppercase tracking-widest transition-all border-b-2", i === 0 ? "border-brand-yellow text-brand-yellow" : "border-transparent text-neutral-400 hover:text-white")}>
                         {tab}
                      </button>
                   ))}
                </div>

                <div className="space-y-8">
                   <p className="text-xl text-neutral-300 leading-relaxed font-light">
                      This module covers the fundamental concepts of analytic mechanics, focusing on the principle of stationary action and its realization through the Euler-Lagrange equations.
                   </p>
                   
                   <div className="bg-neutral-900 p-8 border border-white/5">
                      <h4 className="text-xl font-serif font-bold mb-6 text-brand-yellow">Assigned Quiz: Module 1 Foundations</h4>
                      <div className="space-y-6">
                         <div className="p-6 bg-black border border-white/10 rounded-sm">
                            <p className="text-lg mb-6">1. Which of the following principles forms the basis of Lagrangian Mechanics?</p>
                            <div className="space-y-4">
                               {['Hamilton\'s Principle', 'Newton\'s Third Law', 'Faraday\'s Law', 'Bernoulli\'s Principle'].map((opt, i) => (
                                  <label key={i} className="flex items-center space-x-4 p-4 border border-white/5 hover:border-brand-yellow/50 cursor-pointer transition-all">
                                     <div className="w-5 h-5 rounded-full border-2 border-neutral-600"></div>
                                     <span className="font-medium">{opt}</span>
                                  </label>
                               ))}
                            </div>
                         </div>
                         <button className="bg-brand-yellow text-black px-12 py-4 rounded-sm font-bold uppercase text-sm">Submit Quiz</button>
                      </div>
                   </div>
                </div>
             </div>

             <div className="lg:w-1/3">
                <div className="sticky top-32 space-y-10">
                   <div className="bg-neutral-900 p-8 border border-white/10">
                      <h4 className="text-xl font-serif font-bold mb-6 border-b border-white/10 pb-4">Course Content</h4>
                      <div className="space-y-2">
                         {[
                           { t: 'Course Introduction', d: '10:24', active: false },
                           { t: 'Generalized Coordinates', d: '25:12', active: true },
                           { t: 'Euler-Lagrange Equations', d: '38:05', active: false },
                           { t: 'Conservation Laws', d: '22:40', active: false },
                           { t: 'Central Force Problem', d: '45:10', active: false },
                         ].map((l, i) => (
                           <div key={i} className={cn("flex justify-between items-center p-4 cursor-pointer transition-all", l.active ? "bg-brand-yellow text-black" : "hover:bg-white/5")}>
                              <div className="flex items-center">
                                 <Play className={cn("w-4 h-4 mr-3", l.active ? "fill-current" : "text-neutral-500")} />
                                 <span className="text-sm font-bold">{l.t}</span>
                              </div>
                              <span className="text-xs font-mono opacity-60">{l.d}</span>
                           </div>
                         ))}
                      </div>
                   </div>

                   <div className="bg-brand-yellow p-8 border-2 border-black text-black">
                      <h4 className="text-xl font-serif font-bold mb-4">Instructor</h4>
                      <div className="flex items-center space-x-4 mb-6">
                         <div className="w-16 h-16 bg-black rounded-full"></div>
                         <div>
                            <p className="font-bold text-lg">Dr. Sarah Ahmed</p>
                            <p className="text-xs font-bold uppercase tracking-widest opacity-60">Physics Expert</p>
                         </div>
                      </div>
                      <p className="text-sm font-medium leading-relaxed mb-6">
                        Sarah is a theoretical physicist with over 15 years of experience in higher education research and teaching.
                      </p>
                      <button className="w-full border-2 border-black py-3 rounded-sm font-bold uppercase text-xs">View Full Profile</button>
                   </div>
                </div>
             </div>
          </div>
       </div>
    </div>
  );
};

// --- App Root ---

export default function App() {
  const [lang, setLang] = useState('en');

  return (
    <Router>
      <Navbar lang={lang} setLang={setLang} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<CourseCatalog />} />
        <Route path="/courses/:id" element={<CourseDetail />} />
        <Route path="/resources" element={<ResourceHub />} />
        <Route path="/portal" element={<Portal />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <Footer />
    </Router>
  );
}
