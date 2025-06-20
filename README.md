# Project Setup Guide

This guide explains how to set up the project.

## Configuration

### Step 1: Copy and Configure `config.php`
1. Copy the .php files and the js/dist folders to the webroot.
2. Locate the `config-dist.php` file in the project root directory.
3. Copy `config-dist.php` to a new file named `config.php`:
   ```bash
   cp config-dist.php config.php
   ```
4. Open `config.php` in a text editor and add the relevant values to your mysql database.

## Making Alterations

The code is precompiled, but if you want to compile it yourself or make changes here are the instructions.

### Install npm Dependencies
1. Navigate to the project root directory in your terminal.
2. Run the following command to install the required Node.js dependencies:
   ```bash
   npm install
   ```
   - This installs all packages listed in `package.json`.
   - If you encounter errors, ensure Node.js and npm are installed correctly (`node -v` and `npm -v` to check versions).

### Step 3: Build the Project
1. After installing dependencies, build the front-end assets (e.g., JavaScript, CSS) using the following command:
   ```bash
   npm run build
   ```
   - This runs the build script defined in `package.json` (e.g., using Webpack, Vite, or another bundler).
   - The output is placed in the `dist` folder, and should be copied to webroot for serving by the web server.
