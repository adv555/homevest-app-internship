import React from 'react'
import { DashboardMapProps } from 'pages/dashboard-map/types/dashboard-map-props.interface'
import { GoogleMap, LoadScript, Marker, OverlayView } from '@react-google-maps/api'
import markerIcon from './marker-icon.svg'
import { Typography } from 'components/common/typography/typography'
import { ReactComponent as PopupBottomIcon } from './popup-bottom.svg'
import { Point } from './point.class'

const center = {
  lat: 48.4465948,
  lng: 22.7098565,
}

export const DashboardMap: React.FC<DashboardMapProps> = ({ items }) => {
  return (
    <div className="">
      <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAP_API_KEY as string}>
        <GoogleMap mapContainerClassName="w-full h-233 rounded-3xl" center={center} zoom={16}>
          {items.map(item => (
            <React.Fragment key={item.id}>
              <Marker
                position={item.position}
                icon={{
                  url: markerIcon,
                  anchor: new Point(35, 30),
                }}
              />
              <OverlayView
                mapPaneName={OverlayView.FLOAT_PANE}
                position={item.position}
                getPixelPositionOffset={() => {
                  return {
                    x: -99,
                    y: -113,
                  }
                }}
              >
                <div className="flex bg-white p-2 border border-green rounded-lg relative">
                  <div>
                    <img src={item.image} alt="building" className="rounded-lg w-16 h-16" />
                  </div>
                  <div className="ml-4">
                    <Typography type="body-medium">{item.name}</Typography>
                    <Typography type="body-large-medium" className="text-light-blue mt-2">
                      {item.price}
                    </Typography>
                  </div>
                  <div
                    className="absolute"
                    style={{
                      left: 'calc(50% - 10px)',
                      top: 'calc(100% - 0.5px)',
                      height: '1px',
                      width: '20px',
                      backgroundColor: 'white',
                    }}
                  />
                  <PopupBottomIcon
                    className="absolute"
                    style={{
                      left: 'calc(50% - 20px)',
                      top: 'calc(100% - 0.5px)',
                    }}
                  />
                </div>
              </OverlayView>
            </React.Fragment>
          ))}
        </GoogleMap>
      </LoadScript>
    </div>
  )
}
