import React from 'react'
import { Link } from 'react-router'
import { Container, Grid, Span } from 'react-responsive-grid'
import { prefixLink } from 'gatsby-helpers'
import includes from 'underscore.string/include'
import { colors, activeColors } from 'utils/colors'

import typography from 'utils/typography'
import { config } from 'config'

// Import styles.
import 'css/main.css'
import 'css/github.css'

const { rhythm, adjustFontSizeTo } = typography

module.exports = React.createClass({
  propTypes () {
    return {
      children: React.PropTypes.object,
    }
  },
  render () {
    const docsActive = includes(this.props.location.pathname, '/docs/')
    const contributorsActive = includes(this.props.location.pathname, '/contributors/')

    return (
      <div>
        <div
          style={{
            background: colors.bg,
            color: colors.fg,
            marginBottom: rhythm(1.5),
            height: 75
          }}
        >
          <Container
            style={{
              maxWidth: 960,
              paddingLeft: rhythm(3/4),
              fontWeight: 400,
            }}
          >
            <Grid
              columns={12}
              style={{
                padding: `${rhythm(3/4)} 0`
              }}
            >
              <Span
                columns={4}
                style={{
                  height: 24
                }}
              >
                <Link
                  to={prefixLink('/')}
                  style={{
                    textDecoration: 'none',
                    color: colors.fg,
                    fontSize: adjustFontSizeTo('25.5px').fontSize,
                  }}
                >
                  <img src="https://skybetcareers.com/assets/images/logo-sky-betting-and-gaming.png" /> 
                  {/** {config.siteTitle} */}
                </Link>
              </Span>
              <Span columns={8} last>
                <a
                  style={{
                    float: 'right',
                    color: colors.fg,
                    textDecoration: 'none',
                    marginLeft: rhythm(1/2),
                    marginTop: rhythm(-1),                    
                    paddingTop: rhythm(1.4),
                  }}
                  href="https://github.com/tmhn/skybet-graduate-articles"
                >
                  GitHub
                </a>
                <Link
                  to={prefixLink('/docs/')}
                  style={{
                    background: docsActive ? activeColors.bg : colors.bg,
                    color: docsActive ? activeColors.fg : colors.fg,
                    float: 'right',
                    textDecoration: 'none',
                    paddingLeft: rhythm(1/2),
                    paddingRight: rhythm(1/2),
                    paddingBottom: rhythm(3/4),
                    marginBottom: rhythm(-1),
                    paddingTop: rhythm(1.4),
                    marginTop: rhythm(-1),
                  }}
                >
                  Docs
                </Link>
                <Link
                  to={prefixLink('/contributors/')}
                  style={{
                    background: contributorsActive ? activeColors.bg : colors.bg,
                    color: contributorsActive ? activeColors.fg : colors.fg,
                    float: 'right',
                    textDecoration: 'none',
                    paddingLeft: rhythm(1/2),
                    paddingRight: rhythm(1/2),
                    paddingBottom: rhythm(3/4),
                    marginBottom: rhythm(-1),
                    paddingTop: rhythm(1.4),
                    marginTop: rhythm(-1),
                  }}
                >
                  Contributors
                </Link>
              </Span>
            </Grid>
          </Container>
        </div>
        <Container
          style={{
            maxWidth: 960,
            padding: `${rhythm(1)} ${rhythm(3/4)}`,
            paddingTop: 0,
          }}
        >
          {this.props.children}
        </Container>
      </div>
    )
  },
})
