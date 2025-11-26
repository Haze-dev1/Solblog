# Solblog Frontend

A modern, decentralized blogging platform built on Solana blockchain.

## Features

- 📝 Create, update, and delete blog posts
- 👤 User profiles with display names, bios, and avatars
- 💬 Comment on posts
- 🔐 Wallet-based authentication
- ⚡ Built on Solana for fast, low-cost transactions

## Tech Stack

- **Frontend**: Next.js 14, React, TypeScript
- **Styling**: Tailwind CSS
- **Blockchain**: Solana, Anchor Framework
- **Wallet Integration**: Solana Wallet Adapter

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn
- Solana CLI tools
- Phantom or another Solana wallet

### Installation

1. Navigate to the app directory:
```bash
cd app
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Make sure your Solana validator is running:
```bash
# In the root project directory
solana-test-validator
```

4. Start the development server:
```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

### Configuration

The app is configured to connect to `localhost:8899` by default (local validator). To change this, edit `src/components/WalletProvider.tsx`:

```typescript
const endpoint = useMemo(() => "http://localhost:8899", []);
// Change to devnet:
// const endpoint = useMemo(() => clusterApiUrl(WalletAdapterNetwork.Devnet), [network]);
```

## Usage

1. **Connect Wallet**: Click the wallet button in the navbar to connect your Solana wallet

2. **Initialize Blog**: Before creating posts, you need to initialize your blog (one-time setup)

3. **Create Profile**: Set up your profile with a display name, bio, and avatar URL

4. **Create Posts**: Navigate to "Create Post" to write and publish new blog posts

5. **Interact**: View all posts on the home page, delete your own posts, and see comment counts

## Project Structure

```
app/
├── src/
│   ├── app/              # Next.js app router pages
│   │   ├── page.tsx      # Home page
│   │   ├── create/       # Create post page
│   │   └── profile/      # Profile page
│   ├── components/       # React components
│   │   ├── WalletProvider.tsx
│   │   ├── Navbar.tsx
│   │   ├── PostList.tsx
│   │   ├── PostCard.tsx
│   │   ├── CreatePostForm.tsx
│   │   └── ProfileView.tsx
│   ├── hooks/           # Custom React hooks
│   │   ├── useBlog.ts
│   │   └── useFetchData.ts
│   ├── types/           # TypeScript types
│   │   └── blog.ts
│   └── utils/           # Utility functions
│       ├── constants.ts
│       ├── pda.ts
│       └── program.ts
├── package.json
└── ...
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Notes

- Make sure your Solana program is deployed before using the frontend
- The program ID is configured in `src/utils/constants.ts`
- Transactions require SOL for gas fees (get devnet SOL from faucet for testing)

## License

ISC
