# Solo Travel Safety

A safety platform for women traveling solo — with honest stories, safety tips, and feel-good places to help you explore more and stress less.

## 🚀 Features

- **Safety Reviews**: Real user experiences and safety ratings for destinations
- **Community**: Connect with other solo female travelers
- **Safety Tips**: Comprehensive safety advice and resources
- **User Profiles**: Personalized travel profiles and preferences
- **MCP Integration**: AI-powered data access through Model Context Protocol

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS
- **Backend**: Supabase (PostgreSQL + Auth + Storage)
- **Deployment**: Netlify
- **AI Integration**: Model Context Protocol (MCP)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd "Solo Travel Safety"
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   VITE_SUPABASE_URL=your_supabase_project_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Run database migrations**
   - Copy the SQL from `supabase/migrations/20250702000000_newsletter_enhancement.sql`
   - Run it in your Supabase SQL editor

5. **Start the development server**
   ```bash
   npm run dev
   ```

## 🔧 MCP Integration

This project includes a comprehensive Model Context Protocol (MCP) integration that allows AI assistants to interact with your Supabase database.

### Available MCP Tools

1. **Safety Reviews**
   - `get_safety_reviews` - Get safety reviews for destinations
   - `get_destination_stats` - Calculate safety statistics
   - `get_recent_reviews` - Get recent safety reviews

2. **Newsletter Management**
   - `get_newsletter_stats` - Newsletter subscription analytics
   - `get_recent_newsletter_signups` - Recent signup data
   - `search_newsletter_signups` - Search by email

3. **User Management**
   - `get_user_profile` - Get user profile information
   - `search_destinations` - Search destinations

### Testing MCP Integration

1. **Command Line Test**
   ```bash
   npm run test:mcp
   ```

2. **Web Interface Test**
   - Start the development server: `npm run dev`
   - Visit: `http://localhost:5173/mcp-test`
   - Or click "MCP Test" in the navigation (development mode only)

### MCP Server

- **Local Development**: `npm run mcp`
- **Debug Mode**: `npm run mcp:dev`
- **Configuration**: `mcp-config.json`

## 📁 Project Structure

```
Solo Travel Safety/
├── src/
│   ├── components/          # React components
│   ├── pages/              # Page components
│   ├── hooks/              # Custom React hooks
│   │   └── useMCP.ts       # MCP integration hook
│   ├── contexts/           # React contexts
│   ├── lib/                # Utility libraries
│   │   └── supabase.ts     # Supabase client
│   └── data/               # Static data
├── supabase/
│   └── migrations/         # Database migrations
├── netlify/
│   └── functions/          # Netlify serverless functions
│       └── mcp.js          # MCP endpoint
├── mcp-server.js           # MCP server
├── test-mcp.js             # MCP testing script
└── MCP_SETUP.md            # Detailed MCP documentation
```

## 🚀 Deployment

### Netlify Deployment

1. **Connect to Netlify**
   - Link your repository to Netlify
   - Set build command: `npm run build`
   - Set publish directory: `dist`

2. **Environment Variables**
   Set these in your Netlify dashboard:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`

3. **Deploy**
   ```bash
   npm run build
   ```

## 🔒 Security

- **Row Level Security (RLS)**: Enabled on all database tables
- **Authentication**: Supabase Auth with email confirmation
- **API Security**: Proper CORS and input validation
- **Environment Variables**: Secure credential management

## 📊 Database Schema

### Core Tables
- `profiles` - User profiles and preferences
- `reviews` - Safety reviews for destinations
- `comments` - Review comments
- `review_likes` - Review engagement
- `user_destinations` - User-submitted destinations
- `newsletter_signups` - Newsletter subscriptions

### MCP Functions
- `add_newsletter_signup()` - Newsletter signup with conflict handling
- `get_newsletter_stats()` - Comprehensive analytics
- `get_recent_newsletter_signups()` - Recent signup data
- `search_newsletter_signups()` - Email search

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📝 License

This project is licensed under the MIT License.

## 🆘 Support

For support and questions:
- Check the `MCP_SETUP.md` file for detailed MCP documentation
- Review the Supabase dashboard for database issues
- Check Netlify function logs for serverless issues

## 🎯 Roadmap

- [ ] Real-time notifications
- [ ] Advanced analytics dashboard
- [ ] Mobile app development
- [ ] Integration with travel booking platforms
- [ ] AI-powered safety recommendations 