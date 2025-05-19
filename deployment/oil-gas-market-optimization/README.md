# Oil & Gas Market Optimization Web Application

This is the web application for the Oil & Gas Market Optimization project, designed to be deployed on Netlify and integrated with Sookchand Harripersad's portfolio website.

## Features

- Upload custom datasets for oil and gas commodities
- Generate and use sample data
- Backtest trading strategies
- Analyze risk metrics
- Visualize market trends and performance

## Deployment Instructions

1. Create a new site on Netlify
2. Connect to this GitHub repository
3. Configure the build settings:
   - Build command: `pip install -r requirements.txt`
   - Publish directory: `.`
4. Set environment variables:
   - `PYTHON_VERSION`: `3.9`

## Integration with Portfolio Website

The application is integrated with the portfolio website at https://sookchandportfolio.netlify.app/ through:

1. An iframe on the project details page
2. Direct links from the project cards
3. Loading indicators for a smooth user experience

## Local Development

To run the application locally:

```bash
# Install dependencies
pip install -r requirements.txt

# Run the application
streamlit run web_app.py
```

## File Structure

- `web_app.py`: Main Streamlit application
- `requirements.txt`: Python dependencies
- `Procfile`: Netlify deployment configuration
- `runtime.txt`: Python version specification
- `netlify.toml`: Netlify build configuration
- `src/`: Source code for the application
  - `utils/`: Utility functions
  - `pipeline/`: Data processing pipeline
  - `trading/`: Trading strategies
  - `risk/`: Risk assessment tools

## Credits

Developed by Sookchand Harripersad
