// helpers/shareHelper.js

export const handleShare = () => {
  const url = window.location.href
  const title = document.title

  const fbShareLink = `https://www.facebook.com/sharer/sharer.php?u=${url}`

  if (navigator.share) {
    navigator
      .share({
        title: title,
        url: fbShareLink + url
      })
      .then(() => {
        console.log('Thanks for sharing!')
      })
      .catch(console.error)
  } else {
    alert('Share feature is not supported in this browser.')
  }
}

// Print News
export const handlePrint = (printContentId, title, logoUrl, newsUrl) => {
  const printContent = document.getElementById(printContentId)

  // Check if the element exists
  if (!printContent) {
    console.error(`Element with id "${printContentId}" not found.`)
    return
  }

  // Open a new print window
  const windowPrint = window.open('', '', 'width=900,height=650')

  if (!windowPrint) {
    console.error('Failed to open print window.')
    return
  }

  console.log('Window opened for printing.')

  const img = new window.Image()
  img.src = logoUrl // Use the passed logoUrl

  img.onload = () => {
    console.log('Image loaded successfully.')

    windowPrint.document.write(`
        <html>
            <head>
                <title>${title}</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        margin: 20px;
                        padding: 20px;
                    }
                    img {
                        max-width: 100%;
                    }
                    .logo {
                        text-align: center;
                        margin-bottom: 20px;
                    }
                    .title {
                        font-size: 24px;
                        margin: 20px 0;
                        text-align: center;
                        font-weight: bold;
                    }
                </style>
            </head>
            <body>
                <div className="logo">
                    <img src="${img.src}" alt="Logo" width="200" />
                </div>
                <div className="title">${title}</div>
                <div className="news-content">
                    <a href="${newsUrl}" target="_blank">Read More</a> <!-- Link to the news article -->
                </div>
                ${printContent.innerHTML} <!-- The content to print -->
            </body>
        </html>
      `)

    windowPrint.document.close()
    windowPrint.focus()

    windowPrint.print()
    windowPrint.onafterprint = () => windowPrint.close()
  }

  img.onerror = () => {
    console.error('Failed to load the logo image.')
  }
}

// helpers/clipboardHelper.js

export const handleCopyLink = slug => {
  const link = `${window.location.origin}/news/${slug}`

  navigator.clipboard
    .writeText(link)
    .then(() => {
      alert('Link copied to clipboard!')
    })
    .catch(error => {
      console.error('Failed to copy the link:', error)
      alert('Failed to copy the link. Please try again.')
    })
}
