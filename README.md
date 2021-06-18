## Getting up and running

cd blog-frontend

npm install

npm run dev
```

The blog will be running at `http://localhost:3000`

### Running Sanity Studio

To run the Sanity Studio locally, you'll need to run the following commands:

First install the Sanity CLI: `npm install -g @sanity/cli`.

```bash
# From the project root
cd studio

npm install

# Sanity init will let you reconfigure the Studio to use your project ID and dataset
sanity init

sanity start
```

The Studio will be running at `http://localhost:3333`