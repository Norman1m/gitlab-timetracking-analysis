# Images Directory

This directory contains screenshots and GIFs for the GitLab Time Analysis Dashboard.

## Required Images

Add the following images to showcase your dashboard:

### Screenshots
- `dashboard-overview.png` - Main dashboard overview showing all sections
- `activity-heatmap.png` - Close-up of the GitHub-style activity heatmap
- `team-collaboration.png` - Team collaboration network visualization

### GIFs (Optional)
- `dashboard-demo.gif` - Animated demo showing dashboard navigation
- `heatmap-interaction.gif` - GIF showing heatmap hover interactions
- `chart-interactions.gif` - GIF showing chart interactions and tooltips

## Image Guidelines

### Screenshots
- **Resolution**: Minimum 1200x800px, recommended 1920x1080px
- **Format**: PNG for screenshots, JPG for photos
- **Quality**: High quality, clear and readable
- **Content**: Show real data when possible, or use realistic sample data

### GIFs
- **Duration**: 3-10 seconds for demos
- **Size**: Keep under 5MB for web performance
- **Quality**: Balance between quality and file size
- **Content**: Focus on key interactions and features

## Creating Screenshots

1. **Dashboard Overview**: Take a screenshot of the full dashboard page
2. **Activity Heatmap**: Zoom in on the heatmap section
3. **Team Collaboration**: Focus on the collaboration network chart

## Creating GIFs

### Using Screen Recording Tools
- **macOS**: Use QuickTime Player or built-in screen recording
- **Windows**: Use Xbox Game Bar or OBS Studio
- **Linux**: Use SimpleScreenRecorder or OBS Studio

### Recommended Workflow
1. Record your screen while demonstrating features
2. Edit the video to focus on key interactions
3. Convert to GIF using tools like:
   - Online converters (ezgif.com, giphy.com)
   - Desktop apps (GIMP, Photoshop)
   - Command line tools (ffmpeg)

### Example ffmpeg command:
```bash
ffmpeg -i input.mp4 -vf "fps=10,scale=800:-1" output.gif
```

## File Naming Convention

Use descriptive, lowercase names with hyphens:
- `dashboard-overview.png`
- `activity-heatmap.png`
- `team-collaboration.png`
- `dashboard-demo.gif`

## Updating README

After adding images, update the main README.md file to reference them:

```markdown
## Screenshots

![Dashboard Overview](public/images/dashboard-overview.png)
![Activity Heatmap](public/images/activity-heatmap.png)
![Team Collaboration](public/images/team-collaboration.png)

## Demo

![Dashboard Demo](public/images/dashboard-demo.gif)
``` 