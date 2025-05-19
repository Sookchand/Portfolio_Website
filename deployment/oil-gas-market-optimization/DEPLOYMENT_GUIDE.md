# Oil & Gas Market Optimization - Deployment Guide

This guide provides step-by-step instructions for deploying the Oil & Gas Market Optimization web application and integrating it with your portfolio website.

## Deployment Steps

### 1. Deploy the Web Application to Netlify

1. Create a GitHub repository for the Oil & Gas Market Optimization project:
   ```bash
   cd deployment/oil-gas-market-optimization
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/Sookchand/oil-gas-market-optimization.git
   git push -u origin main
   ```

2. Log in to your Netlify account and create a new site:
   - Click "New site from Git"
   - Choose GitHub as your Git provider
   - Select the oil-gas-market-optimization repository
   - Configure build settings:
     - Build command: `pip install -r requirements.txt`
     - Publish directory: `.`
   - Click "Deploy site"

3. Configure environment variables:
   - Go to Site settings > Build & deploy > Environment
   - Add the environment variable: `PYTHON_VERSION` with value `3.9`

4. Set a custom domain (optional):
   - Go to Site settings > Domain management
   - Click "Add custom domain"
   - Enter your domain (e.g., oil-gas.sookchandportfolio.netlify.app)
   - Follow the instructions to configure DNS

### 2. Update Your Portfolio Website

The necessary changes have already been made to your portfolio website:

1. **Updated oilgas.html**:
   - Added an interactive demo section with iframe
   - Added tabs for live demo and screenshots
   - Updated project links

2. **Updated index.html**:
   - Added a "View Demo" button to the Oil & Gas Market Optimization project card

3. **Updated CSS**:
   - Added styles for the interactive demo section
   - Added styles for the demo tabs and iframe container

4. **Updated JavaScript**:
   - Added a function to handle demo tab switching

### 3. Create Screenshot Images

Create screenshots of the web application for the gallery:

1. Run the web application locally:
   ```bash
   cd deployment/oil-gas-market-optimization
   streamlit run web_app.py
   ```

2. Take screenshots of:
   - Data Management Interface
   - Trading Strategy Backtesting
   - Risk Analysis Dashboard

3. Save the screenshots to:
   - `assets/images/oilgas-dashboard-1.jpg`
   - `assets/images/oilgas-dashboard-2.jpg`
   - `assets/images/oilgas-dashboard-3.jpg`

### 4. Test the Integration

1. Open your portfolio website locally or deploy it to Netlify
2. Navigate to the Oil & Gas Market Optimization project page
3. Test the interactive demo:
   - Switch between the Live Demo and Screenshots tabs
   - Verify that the iframe loads correctly
   - Test the "Open Full Dashboard" button

### 5. Deploy Your Portfolio Website

1. Commit and push the changes to your portfolio website repository:
   ```bash
   cd D:/Portfolio_Website
   git add .
   git commit -m "Add Oil & Gas Market Optimization interactive demo"
   git push
   ```

2. If your portfolio website is already deployed on Netlify, it will automatically rebuild with the new changes.

## Troubleshooting

### Iframe Not Loading

If the iframe doesn't load correctly:

1. Check that the Netlify site is deployed successfully
2. Verify that the iframe URL is correct
3. Check for CORS issues (Netlify should allow embedding by default)
4. Try using the "Open Full Dashboard" button as a fallback

### Streamlit App Issues

If the Streamlit app has issues:

1. Check the Netlify build logs for errors
2. Verify that all dependencies are correctly specified in requirements.txt
3. Make sure the Python version is set correctly in the environment variables

## Maintenance

To update the application in the future:

1. Make changes to the code in the oil-gas-market-optimization repository
2. Commit and push the changes
3. Netlify will automatically rebuild and deploy the updated application

## Resources

- [Netlify Documentation](https://docs.netlify.app/)
- [Streamlit Documentation](https://docs.streamlit.io/)
- [GitHub Documentation](https://docs.github.com/)
